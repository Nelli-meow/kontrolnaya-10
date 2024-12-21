import * as React from 'react';
import { useCallback, useState } from 'react';
import { ICommentsMutation } from '../../types';


const initialState = {
  author: '',
  comment: '',
  newsId: '',
};

const CommentsForm: React.FC = () => {
  const [comment, setComment] = useState<ICommentsMutation>(initialState);

  const submitMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if ( !comment.comment) {
      alert('Please content');
      return;
    }

    // onSubmit({...oneNews});

    console.log(comment);
    setComment(initialState);
  };

  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setComment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);


  return (
    <div className="container mt-5">
      <h3 className="text-center">Add comment</h3>
      <form onSubmit={submitMessage}>
        <div className="input-group mb-3">
          <input
            value={comment.author}
            name="author"
            onChange={inputChangeHandler}
            type="text"
            className="form-control"
            placeholder="author"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
          <textarea
            value={comment.comment}
            name="comment"
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="comment*"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-outline-info">Submit</button>
        </div>
      </form>
      <hr/>
    </div>
  );
};

export default CommentsForm;