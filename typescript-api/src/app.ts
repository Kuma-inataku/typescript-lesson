import express, {Request, Response} from "express";
import * as mysql from "mysql2/promise";
import config from "./config";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(config.port, () => {
    console.log(`Start on port ${config.port}.`);
});

const connection = async function() {
    return await mysql.createConnection(config.db);
}

console.log(123);
app.get("/movie", (req: Request, res: Response) => {
    connection()
    .then((connection) => {
        const result = connection.query("SELECT * FROM MOVIE");
        connection.end();
        return result;
    })
    .then(function (rows) {
        res.send(rows);
    })
});
