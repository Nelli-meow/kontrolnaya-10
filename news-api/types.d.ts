export interface INews {
    id: string;
    title: string;
    content: string;
    image: string | null
    date: string;
}

export interface NewWithoutId {
    title: string;
    content: string;
    image: string | null
    date: string;
}

export interface IComments {
    id: string;
    newsId: string;
    author: string;
    comment: string;
}

export interface CommentWithoutId {
    newsId: string;
    author: string;
    comment: string;
}