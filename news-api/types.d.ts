export interface INews {
    id: string;
    title: string;
    description: string;
    image: string | null
    date: string;
}

export interface IMessage {
    id: string;
    newsId: string;
    author: string;
    text: string;
}

export interface NewsAndMessageContext {
    news: INews[],
    messages: IMessage[],
}

export interface NewWithoutId {
    title: string;
    description: string;
    image: string | null
    date: string;
}