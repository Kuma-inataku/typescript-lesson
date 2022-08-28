import express from "express";
import * as mysql from "promise-mysql";
import config from "./config";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(config.port, () => {
    console.log(`Start on port ${config.port}.`);
});

const connection = async () => {
    return await mysql.createConnection(config.db);
}
// console.log(connection);