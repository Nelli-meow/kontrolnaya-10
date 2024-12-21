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

});


newsRouter.post("/", imagesUpload.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body;

        if(!title || !description) {
            res.status(400).send('Please enter a title and description');
            return;
        }

        const newNews: NewWithoutId = {
            title: req.body.title,
            description: req.body.description,
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