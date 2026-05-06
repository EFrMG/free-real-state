import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { db } from "./db/index.ts";
import { properties, users, posts } from "./db/schema.ts";

const app = new Hono();

// Enable CORS for the frontend
app.use("/*", cors());

app.get("/", (c) => {
  return c.text("Free Real Estate API is running!");
});

// GET all properties
app.get("/api/properties", async (c) => {
  const result = await db.select().from(properties);
  return c.json(result);
});

// GET all users
app.get("/api/users", async (c) => {
  const result = await db.select().from(users);
  return c.json(result);
});

// GET all posts
app.get("/api/posts", async (c) => {
  const result = await db.select().from(posts);
  return c.json(result);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
