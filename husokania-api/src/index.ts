import express, {Request, Response} from 'express';
import mongoose from 'mongoose';

const app = express();
const db = mongoose.connect('mongodb+srv://husoka:AQjn1gUwfXNAtiN9@atlascluster.bhxjspv.mongodb.net/Husonia?retryWrites=true&w=majorit');
console.log('Connected to DB...')

app.get('/', (req : Request, res: Response) => {
    res.send('Hello Mazafaka with nodemon 2')
})

app.listen(5069, () => {
    console.log('App running on port number : 5069')
});