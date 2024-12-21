import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { deleteNewsThunk, fetchNewsThunk, getNewMessages } from './newsThunk.ts';
import { selectNewsItems } from './newsSlice.ts';
import NewsItem from './components/NewItem/NewsItem.tsx';
import { Link } from 'react-router-dom';

const News = () => {
  const dispatch = useAppDispatch();
  const newsData = useAppSelector(selectNewsItems);

  const reversedNews = [...newsData].reverse();

  const getData = useCallback((lastDate: string | null) => {
    if(lastDate === null) {
      dispatch(fetchNewsThunk());
    } else {
      dispatch(getNewMessages(lastDate));
    }
  },[dispatch]);

  const onDelete = (id: string) => {
    dispatch(deleteNewsThunk(id));
  };

  useEffect(() => {
     getData(null);

  }, [getData]);


  return (
    <div className="container">
      <div className="d-flex justify-content-sm-between align-items-center">
        <h3 className="my-5">Posts</h3>
        <Link to="/news/add-news" className="btn btn-outline-primary">Add new post</Link>
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
              onDelete={onDelete}
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
