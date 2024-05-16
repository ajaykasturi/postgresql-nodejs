# Node.js PostgreSQL Application

This is a simple Node.js application demonstrating how to use PostgreSQL with the `pg` library.

## Prerequisites

Before running this application, you need to have the following installed on your system:

- Node.js
- PostgreSQL
- TypeScript

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ajaykasturi/postgresql-nodejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd postgresql-nodejs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a PostgreSQL database and configure connection details in `connection.ts`.

## Configuration

In order to connect to your PostgreSQL database, you need to configure the connection details in `connection.ts`. Modify the following lines according to your PostgreSQL setup:

```
connectionString: "postgresql://username:password@host/database",
```
