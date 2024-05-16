import { client } from "./connection";

async function createUsersTable() {
  try {
    await client.connect();
    const res = await client.query(`CREATE TABLE users2 (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
    console.log(res);
  } catch (err: any) {
    console.log("Failed: ", err);
  }
}
createUsersTable();
