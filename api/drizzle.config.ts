import {defineConfig} from "drizzle-kit";
import {env} from "@/env";

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  out: './src/database/migrations',
  schema: './src/database/schema/index.ts',
  casing: "snake_case"
})