import {config} from 'dotenv';
config();
import cors from 'cors';
import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import Product from './models/product';
import Skill from './models/skill';

const app = express();
const PORT = 5069;

app.use(cors({origin : process.env.ALLOWED_ORIGIN }) ) 
app.use(express.json() );   //Request içinde gelen body datasını json'a çevirir. req.body'den okuyabilirsin.

app.get('/', (req : Request, res: Response) => {
    res.send('Hello Mazafaka with nodemon 2')
})

app.get('/skills', async (req : Request, res: Response) => {
    console.log('geldik burdayık')
    const skills = await Skill.find({});
    res.json(skills);
})

app.post('/skills', async (req : Request, res: Response) => {
    const newSkill = new Skill({
        name : req.body.name,
        rating  : req.body.rating
    });
    const createdSkill = await newSkill.save();
    res.json(createdSkill._id);
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