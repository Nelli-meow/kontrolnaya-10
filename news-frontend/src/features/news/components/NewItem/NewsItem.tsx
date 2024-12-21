import { Link } from 'react-router-dom';
import * as React from 'react';
import { apiURL } from '../../../../globalConstants.ts';
import NoPic from '../../../../assets/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg';
interface Props {
  title: string;
  date: string;
  id: string;
  image?: string | null;
}

const NewsItem: React.FC<Props> = ({title, date , image = NoPic, id}) => {
  const imageSrc = image ? `${apiURL}/${image}` : NoPic;

  return (
    <div className="border border-2 rounded p-5 my-5 d-flex justify-content-sm-between align-items-center">
      <img src={imageSrc} alt="image" className="img-thumbnail w-25" />
      <div className="d-flex justify-content-sm-between align-items-center gap-5">
        <div><h4 className="m-0">{title}</h4></div>
        <span>{date}</span>
        <Link to={`/news/${id}`}>Read Full Post</Link>
        <button type="button" className="btn btn-outline-info">Delete</button>
      </div>
    </div>
  );
};

export default NewsItem;