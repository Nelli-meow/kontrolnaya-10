import express from "express";
import fileDb from "../fileDb";
import {NewWithoutId} from "../types";
import {imagesUpload} from "../multer";

const newsRouter = express.Router();

newsRouter.get("/", async (req, res) => {
    try {
        const news = await fileDb.getNews();
        res.status(200).send({news});
    } catch (e) {
        res.status(500).send('Error');
    }
});

newsRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const oneNew = await fileDb.getNewsById(id);
        if(oneNew) {
            res.status(200).send(oneNew);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (e) {
        res.status(500).send('Error');
    }
});


newsRouter.post("/", imagesUpload.single('image'), async (req, res) => {
    try {
        const { title, content } = req.body;

        if(!title || !content) {
            res.status(400).send('Please enter a title and content');
            return;
        }

        const newNews: NewWithoutId = {
            title: req.body.title,
            content: req.body.content,
            image: req.file ? 'image' + req.file.filename : null,
            date: req.body.date,
        };


        const news = await fileDb.addNews(newNews);

        res.status(200).send({news});
    } catch (e) {
        res.status(500).send('Error');
    }
})


export default newsRouter;