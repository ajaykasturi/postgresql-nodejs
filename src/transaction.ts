import { client } from "./connection";
type userDetails = {
  username: string;
  email: string;
  password: string;
};
type address = {
  city: string;
  country: string;
  pincode: string;
};
async function insertUserAndAddress(
  { username, email, password }: userDetails,
  { city, country, pincode }: address
) {
  try {
    await client.connect();

    //start transaction
    await client.query("BEGIN");
    //Insert User
    const insertUserQuery = `INSERT INTO users(username, email, password) VALUES($1,$2,$3)`;
    const userValues = [username, email, password];
    await client.query(insertUserQuery, userValues);

    //insert address
    const insertAddressQuery = `INSERT INTO addresses(user_id,city, country,pincode) VALUES (currval('users_id_seq'), $1, $2, $3)`;
    const addressValues = [city, country, pincode];
    await client.query(insertAddressQuery, addressValues);

    // Commit transaction
    await client.query("COMMIT");

    console.log("User and address inserted successfully");
  } catch (err: any) {
    await client.query("ROLLBACK"); // Roll back the transaction on error
    console.error("Error during transaction, rolled back.", err);
  } finally {
    await client.end();
  }
}

const userData = {
  username: "charan",
  email: "charan@gmail.com",
  password: "charan123",
};
const addressData = {
  city: "Chennai",
  country: "India",
  pincode: "54631",
};
insertUserAndAddress(userData, addressData);
