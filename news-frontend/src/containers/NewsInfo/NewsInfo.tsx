import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchNewsByIdThunk } from '../../features/news/newsThunk.ts';
import Header from '../../components/Header/Header.tsx';
import { apiURL } from '../../globalConstants.ts';
import CommentsForm from '../../components/CommentsForm/CommentsForm.tsx';


const NewsInfo = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const newsItem = useAppSelector((state) =>
    state.newsPosts.newsItems.find(item => item.id === id)
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchNewsByIdThunk(id));
    }
  }, [dispatch, id]);

  if (!newsItem) {
    return (
      <>
          <p>News Not Found</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h1>{newsItem.title}</h1>
        <span>{newsItem.date}</span>
        <p>{newsItem.content}</p>
        <img src={apiURL + '/' + newsItem.image} alt={newsItem.title} className="img-thumbnail w-25" />
      </div>
      <hr />
      <div className="mt-5 container">
        <h2>Comments</h2>
        <hr />
        <div>
          <CommentsForm/>
        </div>
      </div>
    </>
  );
};

export default NewsInfo;
