import {promises as fs} from 'fs';
import crypto from 'node:crypto';
import {INews , NewWithoutId} from "./types";

const fileName = './db.json';
let data: INews[] = [];

const fileDb = {
    async fileExists() {
        try {
            const fileContent = await fs.readFile(fileName);
            data = JSON.parse(fileContent.toString()) as INews[];

        } catch (err) {
            await this.save();
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
        const newNew = {id, ...oneNew, date};

        data.push(newNew);

        await this.save();
        return newNew;
    },

    async getNewsById(id: string) {
        return data.find(oneNew => oneNew.id === id);
    },

    async deleteNews(id: string) {
        const index = data.findIndex(oneNews => oneNews.id === id);
        if (index !== -1) {
            data.splice(index, 1);
            await this.save();
            return true;
        }
        return false;
    },

    async save() {
        return await fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;