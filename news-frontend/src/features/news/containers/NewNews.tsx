import Form from '../../../components/Form/Form.tsx';

import { INewsMutation} from '../../../types';
import { useAppDispatch } from '../../../app/hooks.ts';
import { addNewsThunk } from '../newsThunk.ts';
import Header from '../../../components/Header/Header.tsx';


const NewMessage = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (news: INewsMutation) => {
    await dispatch(addNewsThunk(news));
  };

  return (
    <>
      <Header/>
      <Form onSubmit={onSubmit}/>
    </>
  );
};

export default NewMessage;