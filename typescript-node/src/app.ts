import express, { Request, Response, NextFunction } from 'express';
interface MessageRequest extends Request {
    body: {
        message: string;
    }
}
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    console.log('hello');
    next();
});
app.get('/', (req, res, next) => {
    res.send('<h1>hello</h1>');
});
app.post('/', (req: MessageRequest, res, next) => {
    console.log(req.body.message);
    res.send(`<h1>I got ${req.body.message}</h1>`);
});
app.use((err:Error, req: Request, res: Response, next: NextFunction) => {
    console.log('hello');
    next();
});
app.listen(3000);