# Free Real Estate

> [!NOTE]
> This project is under active development.

Real Estate company demo website and testing ground for numerous backends.

So far, I am working with Drizzle and SQLite, although I expect to use Prisma and MongoDB, and Golang too.

## Project Structure

The main parts of this monorepo are as follows:

### Frontend

**Dependencies**: react-router v7, Tailwind v4, motion, react-leaflet and react-icons.

### Backends

**Dependencies**: hono, dotenv, libsql and drizzle-orm.

### Shared

Types and schemas are shared as a local dependency under the name of "@free-real-estate/shared".

Expected to be integrated with different databases through Prisma, Drizzle and in Golang.

## Running the project

As of now, one could clone the repository and run:

```bash
pnpm install

pnpm run dev
```

This would start both the backend and frontend servers in parallel. Consult the [main package file](./package.json) for more commands to run from the root of the project.

---

Previews of the frontend:

<img width="1471" height="1009" alt="homepage" src="https://github.com/user-attachments/assets/04b5289c-dd1b-45b4-b025-50843443a733" />
