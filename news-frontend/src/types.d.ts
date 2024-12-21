export interface INews {
  id: string;
  title: string;
  content: string;
  image: string | null
  date: string;
}

export interface INewsMutation {
  title: string;
  content: string;
  image: string | null;
  date: string;
}

export interface IComments {
  id: string;
  newsId: string;
  author: string;
  comment: string;
}

export interface ICommentsMutation {
  author: string;
  newsId: string;
  comment: string;
}