import { DATABASE_AUTH_TOKEN, DATABASE_URL } from "@/lib/env";
import { createClient } from "@libsql/client";

export const libsqlClient = createClient({
  url: DATABASE_URL,
  authToken: DATABASE_AUTH_TOKEN,
});
