"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express_1.default.static('assets'));
// app.use(express.static(path.join(__dirname, "assets")));
// app.use(express.static('views'));
app.get('/', (req, res) => {
    res.render('index');
});
app.use((req, res) => {
    res.render('404');
});
app.listen(port, () => {
    console.log(`server is listening to requests at port ${port}`);
});
