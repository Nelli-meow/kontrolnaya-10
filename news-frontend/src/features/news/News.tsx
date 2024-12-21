import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchNewsThunk } from './newsThunk.ts';
import { selectNewsItems } from './newsSlice.ts';
import NewsItem from '../../components/NewsItem.tsx';
import { INews } from '../../types';

const News = () => {
  const dispatch = useAppDispatch();
  const newsData = useAppSelector(selectNewsItems);

  const news: INews[] = newsData.news || [];

  useEffect(() => {
    dispatch(fetchNewsThunk());
  }, [dispatch]);

  return (
    <div className="container">
      <h3 className="my-5">Posts</h3>
      <hr/>
      <>
        {news.length > 0 ? (
          news.map((oneNew) =>
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