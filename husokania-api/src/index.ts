import express, {Request, Response} from 'express';
const app = express();

app.get('/', (req : Request, res: Response) => {
    res.send('Hello Mazafaka with nodemon 2')
})

app.listen(5069);