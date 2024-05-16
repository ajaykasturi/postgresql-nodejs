import { client } from "./connection";

async function insertData(username: string, email: string, password: string) {
  try {
    await client.connect();
    // Use parameterized query to prevent SQL injection
    const insertQuery =
      "INSERT INTO users2(username, email, password) VALUES($1,$2,$3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion Success", res);
  } catch (err: any) {
    console.log("Failed: ", err);
  } finally {
    await client.end();
  }
}
insertData("sandeep", "sandeep@gmail.com", "sandy123");
