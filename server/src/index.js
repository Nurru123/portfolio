const express = require('express');
const cors = require('cors');
const multer  = require("multer");
const fs = require('fs');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('/',(req, res, next) => {
    res.set({'Access-Control-Allow-Origin': ['*']});
    next();
})

const IMAGES_FOLDER = `${__dirname}/../static/images`;
const DATA_FOLDER = `${__dirname}/../static/data`;

const galleryStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${IMAGES_FOLDER}/gallery`);
    },
    filename: function (req, file, cb) {
        const { id } = req.params;

        const json = fs.readFileSync(`${DATA_FOLDER}/gallery.json`);
        const data = JSON.parse(json);
        data[id] = file.originalname;
        fs.writeFileSync(`${DATA_FOLDER}/gallery.json`, JSON.stringify(data));
        cb(null, file.originalname);
    }
});
const galleryUpload = multer({ storage: galleryStorage });

app.get('/gallery/:file', (req, res) => {
    const { file } = req.params;
    res.sendFile(`/gallery/${file}`, { root: IMAGES_FOLDER })
})

app.get('/gallery', (req, res) => {
    const json = fs.readFileSync(`${DATA_FOLDER}/gallery.json`);
    res.send(json);
})

app.post('/gallery/:id', galleryUpload.single('upload-image'), (req, res) => {
    res.send('Файл загружен')
})

app.delete('/gallery/:index', (req, res) => {
    const { index } = req.params;
    const json = fs.readFileSync(`${DATA_FOLDER}/gallery.json`);
    let data = JSON.parse(json);
    let file = data[index];
    if (file) {
        data = data.filter((_, i) => i != index)
        JSON.stringify(data)
        res.send(data)

        fs.writeFileSync(`${DATA_FOLDER}/gallery.json`, JSON.stringify(data));

        if(data.indexOf(file) < 0) {
            fs.unlinkSync(`${IMAGES_FOLDER}/gallery/${file}`, function(err) {
                if (err) throw err;
                res.send('File deleted!');
            })
        }
    }
    
})


app.listen(3001, () => {
    console.log("let's go")
})