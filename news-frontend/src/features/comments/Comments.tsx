import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { deleteCommentsThunk } from './commentsThunk.ts';
import CommentItem from './components/CommentItem/CommentItem.tsx';
import { selectCommentsItems } from './commentsSlice.ts';


const Comments = () => {
  const dispatch = useAppDispatch();
  const commentsData = useAppSelector(selectCommentsItems);

  const onDelete = (id: string) => {
    dispatch(deleteCommentsThunk(id));
  };

  return (
    <div>
      {commentsData.map((item) => (
        <CommentItem key={item.id} comment={item.comment} author={item.author} id={item.id} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default Comments;