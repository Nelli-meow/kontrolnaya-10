import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchNewsThunk } from './newsThunk.ts';
import { selectNewsItems } from './newsSlice.ts';
import NewsItem from './components/NewItem/NewsItem.tsx';
import { INews } from '../../types';
import { Link } from 'react-router-dom';

const News = () => {
  const dispatch = useAppDispatch();
  const newsData = useAppSelector(selectNewsItems);

  const news: INews[] = newsData.news || [];

  const reversedNews = [...news].reverse();

  useEffect(() => {
    dispatch(fetchNewsThunk());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="d-flex justify-content-sm-between align-items-center">
        <h3 className="my-5">Posts</h3>
        <Link to="add-news" className="btn btn-outline-primary">Add new post</Link>
      </div>
      <hr/>
      <>
        {reversedNews.length > 0 ? (
          reversedNews.map((oneNew) =>
            <NewsItem
              key={oneNew.id}
              title={oneNew.title}
              date={oneNew.date}
              id={oneNew.id}
              image={oneNew.image}
            />
          )
        ) : (
          <p className="text-center mt-5">No news here yet</p>
        )}
      </>
    </div>
  );
};

export default News;
