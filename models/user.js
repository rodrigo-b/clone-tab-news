import database from "infra/database.js";
import { ValidationError } from "infra/errors";

async function create(userInputValues) {
  await validateUniqueEmail(userInputValues.email);
  const newUser = await runInsertQuery(userInputValues);
  return newUser;

  async function validateUniqueEmail(email) {
    const result = await database.query({
      text: `SELECT 
              email
            FROM 
              users 
            WHERE 
              LOWER(email) = LOWER($1)            
            ;`,
      values: [email],
    });

    if (result.rowCount > 0) {
      throw new ValidationError({
        message: "The provided email is being used ",
        action: "Use another email to complete the form",
      });
    }
  }

  async function runInsertQuery(userInputValues) {
    const result = await database.query({
      text: `INSERT INTO 
                 users (username, email, password) 
           VALUES 
                 ($1, $2, $3) 
            RETURNING
               *
            ;`,
      values: [
        userInputValues.username,
        userInputValues.email,
        userInputValues.password,
      ],
    });
    return result.rows[0];
  }
}

const user = {
  create,
};

export default user;
