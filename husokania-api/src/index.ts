import {config} from 'dotenv';
config();

import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import Product from './models/product';

const app = express();
const PORT = 5069;

app.use(express.json() );   //Request içinde gelen body datasını json'a çevirir. req.body'den okuyabilirsin.

app.get('/', (req : Request, res: Response) => {
    res.send('Hello Mazafaka with nodemon 2')
})

app.post('/products', async (req : Request, res: Response) => {
    const newProduct = new Product({
        name : "tOMAT"
    });
    const createdProduct = await newProduct.save();
    res.json(createdProduct._id);
})

mongoose.connect(process.env.MONGO_URL!)
.then( () => {
    console.log('Connected to DB...')
    app.listen(PORT, () => {
        console.log('App running on port number :' + PORT)
    });

});


