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
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection_1.client.connect();
            const getUserQuery = "SELECT * FROM users2 WHERE email=$1";
            const values = [email];
            const res = yield connection_1.client.query(getUserQuery, values);
            console.log("Success", res);
            if (res.rows.length > 0) {
                console.log("user: ", res.rows[0]);
            }
            else {
                console.log("no user found with given email id");
            }
        }
        catch (err) {
            console.log("Failed: ", err);
        }
        finally {
            yield connection_1.client.end();
        }
    });
}
getUser("sandeep@gmail.com");
