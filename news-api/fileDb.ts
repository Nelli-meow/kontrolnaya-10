import { promises as fs } from 'fs';
import crypto from 'node:crypto';
import { CommentWithoutId, IComments, INews, NewWithoutId } from "./types";

const fileName = './db.json';
const fileNameForComments = './commentsDb.json';
let data: INews[] = [];
let dataComments: IComments[] = [];

const fileDb = {
    async fileExists() {
        try {
            try {
                const fileContent = await fs.readFile(fileName);
                data = JSON.parse(fileContent.toString()) as INews[];
            } catch (err) {

                await fs.writeFile(fileName, JSON.stringify([]));
                data = [];
            }

            try {
                const fileContentComments = await fs.readFile(fileNameForComments);
                dataComments = JSON.parse(fileContentComments.toString()) as IComments[];
            } catch (err) {
                await fs.writeFile(fileNameForComments, JSON.stringify([]));
                dataComments = [];
            }

        } catch (err) {
            console.error(err);
        }
    },

    async init() {
        await this.fileExists();
    },

    async getNews() {
        return data;
    },

    async addNews(oneNew: NewWithoutId) {
        await this.fileExists();

        const id = crypto.randomUUID();
        const date = new Date().toString();
        const newNew = { id, ...oneNew, date };

        data.push(newNew);
        await this.saveNews();
        return newNew;
    },

    async getNewsById(id: string) {
        return data.find(oneNew => oneNew.id === id);
    },

    async deleteNews(id: string) {
        const index = data.findIndex(oneNews => oneNews.id === id);
        if (index !== -1) {
            data.splice(index, 1);
            await this.saveNews();
            await this.saveComments();
            return true;
        }
        return false;
    },

    async getComments() {
        return dataComments;
    },

    async addComment(oneComment: CommentWithoutId) {
        await this.fileExists();

        const id = crypto.randomUUID();
        const newComment = { id, ...oneComment };

        dataComments.push(newComment);
        await this.saveComments();
        return newComment;
    },

    async getCommentsById(id: string) {
        return dataComments.find(oneComment => oneComment.id === id);
    },

    async deleteComment(id: string) {
        const index = dataComments.findIndex(oneComment => oneComment.id === id);
        if (index !== -1) {
            dataComments.splice(index, 1);
            await this.saveComments();
            return true;
        }
        return false;
    },

    async saveNews() {
        try {
            await fs.writeFile(fileName, JSON.stringify(data, null, 2));
        } catch (err) {
            console.error('Error saving news:', err);
            throw new Error('Error saving news');
        }
    },

    async saveComments() {
        try {
            await fs.writeFile(fileNameForComments, JSON.stringify(dataComments, null, 2));
        } catch (err) {
            console.error('Error saving comments:', err);
            throw new Error('Error saving comments');
        }
    },
};

export default fileDb;
