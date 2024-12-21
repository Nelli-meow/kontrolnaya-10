import express from "express";
import fileDb from "../fileDb";
import {CommentWithoutId} from "../types";


const commentsRouter = express.Router();

commentsRouter.get("/", async (req, res) => {
    try {
        const comments = await fileDb.getComments();

        console.log(comments);

        res.status(200).send(comments);
    } catch (e) {
        res.status(500).send('Error');
    }
});

commentsRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const comments = await fileDb.getCommentsById(id);
        if(comments) {
            res.status(200).send(comments);
        } else {
            res.status(404).send('Not Found');
        }
    } catch (e) {
        res.status(500).send('Error');
    }
});


commentsRouter.post("/", async (req, res) => {
    try {
        const { comment, newsId } = req.body;

        if(!comment) {
            res.status(400).send('Please write a comment');
            return;
        } else if(!newsId) {
            res.status(404).send('Not Found');
        }

        const newComment: CommentWithoutId = {
            author: req.body.author || 'Anonymous',
            comment: req.body.comment,
            newsId: req.body.newsId,
        };


        const comments = await fileDb.addComment(newComment);

        res.status(200).send({comments});
    } catch (e) {
        res.status(500).send('Error');
    }
});

commentsRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await fileDb.deleteComment(id);
        if (result) {
            res.status(200).send({ message: "Comment deleted" });
        } else {
            res.status(404).send("Comment not found");
        }
    } catch (e) {
        res.status(500).send('Error');
    }
});


export default commentsRouter;