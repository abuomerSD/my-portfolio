import express, {Express, Request, Response} from "express";
import {config} from 'dotenv';
config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('assets'));
app.use(express.static('views'));

app.get('/', (req: Request, res: Response)=> {
    res.render('index');
})

app.listen(port, ()=> {
    console.log(`server is listening to requests at port ${port}`);
});
