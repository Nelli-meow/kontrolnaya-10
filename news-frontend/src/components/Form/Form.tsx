import * as React from 'react';
import { useCallback, useState } from 'react';
import { INewsMutation } from '../../types';
import FileInput from '../FileInput/FileInput.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  onSubmit: (news: INewsMutation) => void;
}

const initialState = {
  title: '',
  content: '',
  image: null,
  date: '',
};

const Form: React.FC<Props> = ({onSubmit}) => {
  const [oneNews, setOneNews] = useState<INewsMutation>(initialState);
  const navigate = useNavigate();

  const submitMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!oneNews.title || !oneNews.content) {
      alert('Please enter title and content');
      return;
    }

    if(!oneNews.image === null) {

    }

    const messageToSubmit = {
      ...oneNews,
    };

    onSubmit(messageToSubmit);

    console.log(oneNews);
    navigate('/news')
    setOneNews(initialState);
  };

  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setOneNews((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const getFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;

    if (files) {
      setOneNews((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center">Add new post</h3>
      <form onSubmit={submitMessage}>
        <div className="input-group mb-3">
          <input
            value={oneNews.title}
            name="title"
            onChange={inputChangeHandler}
            type="text"
            className="form-control"
            placeholder="title*"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
          <textarea
            value={oneNews.content}
            name="content"
            onChange={inputChangeHandler}
            className="form-control"
            placeholder="message*"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"/>
        </div>
        <div className="input-group mb-3">
         <FileInput name="image" label="Image" onGetFile={getFile}/>
        </div>
        <div className="input-group mb-3">
          <button className="btn btn-outline-info">Submit</button>
        </div>
      </form>
      <hr/>
    </div>
  );
};

export default Form;