import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({ url: process.env.DB_FILE_NAME! });
const db = drizzle({ client });

// Quick test to see if we can talk to the file
console.log("Checking DB connection...");

try {
  await client.execute("SELECT 1");
  console.log("Database connection successful!");
} catch (e) {
  console.error("Database connection failed:", e);
}
