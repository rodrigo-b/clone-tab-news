import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();

  const defaultMigrationOptions = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  if (request.method === "GET") {
    const migrations = await migrationRunner(defaultMigrationOptions);
    return response.status(200).json(migrations);
  } else if (request.method === "POST") {
    const migrations = await migrationRunner({
      ...defaultMigrationOptions,
      dryRun: false,
    });
    return response.status(200).json(migrations);
  }

  return response.status(405);
}
