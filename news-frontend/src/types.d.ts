export interface INews {
  id: string;
  title: string;
  content: string;
  image: string | null
  date: string;
}

export interface INewsAndComments {
  news: INews;
  comments: IComment;
}