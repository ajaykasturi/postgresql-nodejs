import { Client } from "pg";

export const client = new Client({
  connectionString: "postgresql://ajay:@localhost/appdb",
});
