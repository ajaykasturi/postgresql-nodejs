"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
function insertUserAndAddress(_a, _b) {
    return __awaiter(this, arguments, void 0, function* ({ username, email, password }, { city, country, pincode }) {
        try {
            yield connection_1.client.connect();
            //start transaction
            yield connection_1.client.query("BEGIN");
            //Insert User
            const insertUserQuery = `INSERT INTO users(username, email, password) VALUES($1,$2,$3)`;
            const userValues = [username, email, password];
            yield connection_1.client.query(insertUserQuery, userValues);
            //insert address
            const insertAddressQuery = `INSERT INTO addresses(user_id,city, country,pincode) VALUES (currval('users_id_seq'), $1, $2, $3)`;
            const addressValues = [city, country, pincode];
            yield connection_1.client.query(insertAddressQuery, addressValues);
            // Commit transaction
            yield connection_1.client.query("COMMIT");
            console.log("User and address inserted successfully");
        }
        catch (err) {
            yield connection_1.client.query("ROLLBACK"); // Roll back the transaction on error
            console.error("Error during transaction, rolled back.", err);
        }
        finally {
            yield connection_1.client.end();
        }
    });
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
