import { Link } from 'react-router-dom';
import * as React from 'react';

interface Props {
  title: string;
  date: string;
  id: string;
  image: string | null;
}

const NewsItem: React.FC<Props> = ({title, date}) => {
  return (
    <>
      <div className="border border-2 rounded p-5 my-5">
        <image/>
        <div className="d-flex justify-content-sm-between align-items-center">
          <h4>{title}</h4>
          <span>{date}</span>
          <Link to="/news/:id">Read Full Post</Link>
          <button type="button" className="btn btn-outline-info">Delete</button>
        </div>
      </div>
    </>
  );
};

export default NewsItem;