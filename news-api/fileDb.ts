import {promises as fs} from 'fs';
import crypto from 'node:crypto';
import {NewsAndCommentsContext, NewWithoutId} from "./types";

const fileName = './db.json';
let data: NewsAndCommentsContext = {
    news: [],
    messages: [],
};

const fileDb = {
    async fileExists() {
        try {
            const fileContent = await fs.readFile(fileName);
            const parsedData = JSON.parse(fileContent.toString());

            if (!parsedData.news || !parsedData.messages) {
                console.error();
            }

            data = parsedData;
        } catch (err) {
            data = {news: [], messages: []};
            await this.save();
        }
    },

    async init() {
        await this.fileExists();
    },

    async getNews() {
        return data.news;
    },
    async addNews(oneNew: NewWithoutId) {
        await this.fileExists();

        const id = crypto.randomUUID();
        const date = new Date().toString();
        const newNew = {id, ...oneNew, date};

        data.news.push(newNew);

        await this.save();
        return newNew;
    },

    async getNewsById(id: string) {
        return data.news.find(oneNew => oneNew.id === id);
    },

    async save() {
        return await fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;