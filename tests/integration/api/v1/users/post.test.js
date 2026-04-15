import orchestrator from "tests/orchestrator";
import { version as uuidVersion } from "uuid";
import user from "models/user.js";
import password from "models/password.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/users", () => {
  describe("Anonymous user", () => {
    test("With unique and valid data", async () => {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "Kratos",
          email: "kratos@gmail.com",
          password: "Atreus",
        }),
      });

      expect(response.status).toBe(201);

      const responseBody = await response.json();
      expect(responseBody).toEqual({
        id: responseBody.id,
        username: "Kratos",
        email: "kratos@gmail.com",
        password: responseBody.password,
        created_at: responseBody.created_at,
        updated_at: responseBody.updated_at,
      });

      expect(uuidVersion(responseBody.id)).toBe(4);

      expect(Date.parse(responseBody.created_at)).not.toBeNaN();
      expect(Date.parse(responseBody.updated_at)).not.toBeNaN();

      const userInDatabase = await user.findOneByUsername("Kratos");
      const correctPasswordMatch = await password.compare(
        "Atreus",
        userInDatabase.password,
      );
      expect(correctPasswordMatch).toBe(true);

      const incorrectPasswordMatch = await password.compare(
        "Wrongpassword",
        userInDatabase.password,
      );
      expect(incorrectPasswordMatch).toBe(false);
    });

    test("With duplicated 'email'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "KratosDuplicated",
          email: "kratosDuplicated@gmail.com",
          password: "Atreus",
        }),
      });

      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "KratosDuplicated2",
          email: "KRatosDuplicated@gmail.com",
          password: "Atreus",
        }),
      });

      expect(response2.status).toBe(400);

      const responseBody = await response2.json();
      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "The provided email is being used ",
        action: "adjust the sent data and try again.",
        status_code: 400,
      });
    });

    test("With duplicated 'user'", async () => {
      const response1 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "KratosUSer",
          email: "kratosUser1@gmail.com",
          password: "Atreus",
        }),
      });

      expect(response1.status).toBe(201);

      const response2 = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "KratosUSer",
          email: "KRatosUser2@gmail.com",
          password: "Atreus",
        }),
      });

      expect(response2.status).toBe(400);

      const responseBody = await response2.json();
      expect(responseBody).toEqual({
        name: "ValidationError",
        message: "The provided username is being used",
        action: "adjust the sent data and try again.",
        status_code: 400,
      });
    });
  });
});
