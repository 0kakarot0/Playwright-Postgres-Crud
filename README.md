# Playwright + PostgreSQL CRUD

This project demonstrates CRUD operations (Create, Read, Update, Delete) against a PostgreSQL database using:
- Playwright Test Runner
- node-postgres (pg)
- Repository pattern + service/use-case classes
- Separate test specs per CRUD operation

## Project Structure
- `src/db/users.repository.ts` -> Data access layer (SQL queries)
- `src/db/services/*` -> Single-responsibility service classes (Create/Read/Update/Delete)
- `tests/*.spec.ts` -> Separate specs for each CRUD
- `tests/helpers/db.setup.ts` -> Shared DB setup/teardown + service wiring

## Prerequisites
- Node.js 18+
- PostgreSQL running locally

## Setup

### 1) Install dependencies
npm install

### 2) Configure environment
Create a `.env` file in the project root (copy from `.env.example`):

DATABASE_URL=:yourpassword@localhost:1234/yourdatabase

### 3) Create database (example)
createdb mydatabase

### 4) Run tests
npm test

## Notes
- Schema is ensured automatically via `src/db/schema.ts` (table `users`).
- Each test creates its own data and cleans it up to avoid state leaks.
