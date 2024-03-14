import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { env } from "./env";
import * as TableSchema from "./schema";
import { sqliteTable } from "./schema/_table";

export const tableCreator = sqliteTable;
export * from "drizzle-orm";
export const schema = TableSchema;
const sqliteClient = createClient({
  url: env.DB_URL,
  authToken: env.AUTH_TOKEN,
});

export const db = drizzle(sqliteClient, { schema: TableSchema });
