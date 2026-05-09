# Free Real Estate. Shared

This package serves as the **Single Source of Truth** for the entire monorepo. It centralizes the database schema and type definitions to ensure consistency between the frontend and various backend implementations.

## Contents

- **Schema**: Located in [src/schema.ts](./src/schema.ts) . Defines tables, relations and constraints using `Drizzle`.
- **Types**: Exported from [index.ts](./index.ts) . Provides TypeScript types inferred directly from the database schema.

## Usage

This package is consumed by:

- [/frontend/](/frontend/) for type-safe data fetching and form handling.
- [/backends/node-drizzle/](/backends/node-drizzle/) for database operations and API responses.

When the schema is updated here, appropriate migration commands ought to be run.
