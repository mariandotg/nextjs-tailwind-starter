import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  DATABASE_AUTH_TOKEN: z.string(),
});

export const env = envSchema.parse(process.env);

export const {
    DATABASE_URL,
    DATABASE_AUTH_TOKEN,
} = env;