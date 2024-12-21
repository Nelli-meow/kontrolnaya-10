import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { IComments, ICommentsMutation } from '../../types';


export const fetchCommentsThunk = createAsyncThunk<IComments[], void>(
  'comments/fetchCommentsThunk',
  async () => {
    const newsResponse = await axiosApi<IComments[]>('/news');

    return newsResponse.data || [];
  }
);

export const addCommentsThunk = createAsyncThunk<void, ICommentsMutation>(
  'comments/addCommentsThunk',
  async (ICommentsMutation) => {
    const formData = new FormData();

    const keys = Object.keys(ICommentsMutation) as (keyof ICommentsMutation)[];

    keys.forEach(key => {
      const value = ICommentsMutation[key];

      if(value !== null) {
        formData.append(key, value);
      }
    })

    await axiosApi.post('/comments', formData);
  }
);

export const deleteCommentsThunk = createAsyncThunk(
  'comments/deleteCommentsThunk',
  async (id: string) => {
    try {
      await axiosApi.delete(`/comments/${id}`);
    } catch (error) {
      return ('Error');
    }
  }
);

export const getCommentsMessages = createAsyncThunk<IComments[], string>(
  'comments/getCommentsMessages',
  async (id) => {
    const newsResponse = await axiosApi<IComments[]>(`/comments?new_id=${id}`);

    return newsResponse.data;
  }
);
