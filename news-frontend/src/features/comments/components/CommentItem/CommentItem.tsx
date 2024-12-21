import * as React from 'react';

interface Props {
  author: string;
  comment: string;
  onDelete: (id: string) => void;
  id: string;
}

const CommentItem: React.FC<Props> = ({author, comment, onDelete, id}) => {
  return (
    <div className="container">
      <div className="border border-gray-200 rounded-lg p-5 my-5 d-flex  justify-content-sm-between align-items-center">
        <h4>{author} wrote:</h4>
        <p>{comment}</p>
        <button type="button" className="btn btn-outline-info" onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  );
};

export default CommentItem;