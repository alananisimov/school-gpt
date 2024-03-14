import type { Config } from "drizzle-kit";

import { env } from "./src/env";

export default {
  schema: "./src/schema",
  driver: "turso",
  dbCredentials: {
    url: env.DB_URL,
    authToken: env.AUTH_TOKEN,
  },
  tablesFilter: ["school-gpt_*"],
} satisfies Config;
