const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const cors = require('cors');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/',(req, res, next) => {
    res.set({'Access-Control-Allow-Origin': ['*']});
    next();
})

let pics = [
    'https://i.pinimg.com/564x/d3/11/3c/d3113c5d9261341e35feb2a6277b2a6f.jpg',
    'https://i.pinimg.com/564x/6d/35/7d/6d357dc34995e78b7053dae7ee85b592.jpg',
    'https://i.pinimg.com/564x/8b/93/dd/8b93dde5c69cc7afef2453314b74c009.jpg',
    'https://i.pinimg.com/564x/cd/6b/7f/cd6b7fc827a317be7b3570d14900ef32.jpg',
    'https://i.pinimg.com/564x/75/5c/62/755c625a280a999486cf46ee097602f0.jpg',
    'https://i.pinimg.com/564x/7a/05/e4/7a05e4f6f99d2cebd31dccf9f5592a33.jpg',
];

app.get('/', (req, res) => {
    res.status(200).json(pics)
})




app.listen(3001, () => {
    console.log("let's go")
})