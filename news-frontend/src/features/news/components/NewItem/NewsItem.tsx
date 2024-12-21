import { Link } from 'react-router-dom';
import * as React from 'react';
import { apiURL } from '../../../../globalConstants.ts';

interface Props {
  title: string;
  date: string;
  id: string;
  image: string | null;
}

const NewsItem: React.FC<Props> = ({title, date , image}) => {

  console.log(image);
  return (
    <>
      <div className="border border-2 rounded p-5 my-5 d-flex justify-content-sm-between align-items-center">
        {image && <img src={`${apiURL}/${image}`} alt="image" className="img-thumbnail w-25"  />}
        <div className="d-flex justify-content-sm-between align-items-center gap-5">
          <div><h4 className="m-0">{title}</h4></div>
          <span>{date}</span>
          <Link to="/news/:id">Read Full Post</Link>
          <button type="button" className="btn btn-outline-info">Delete</button>
        </div>
      </div>
    </>
  );
};

export default NewsItem;