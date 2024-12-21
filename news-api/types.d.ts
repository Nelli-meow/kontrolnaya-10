export interface INews {
    id: string;
    title: string;
    content: string;
    image: string | null
    date: string;
}

export interface IComments {
    id: string;
    newsId: string;
    author: string;
    text: string;
}

export interface NewsAndCommentsContext {
    news: INews[],
    messages: IComments[],
}

export interface NewWithoutId {
    title: string;
    content: string;
    image: string | null
    date: string;
}