import { client } from "./connection";

async function getUser(email: string) {
  try {
    await client.connect();
    const getUserQuery = "SELECT * FROM users2 WHERE email=$1";
    const values = [email];
    const res = await client.query(getUserQuery, values);
    console.log("Success", res);
    if (res.rows.length > 0) {
      console.log("user: ", res.rows[0]);
    } else {
      console.log("no user found with given email id");
    }
  } catch (err: any) {
    console.log("Failed: ", err);
  } finally {
    await client.end();
  }
}
getUser("sandeep@gmail.com");
