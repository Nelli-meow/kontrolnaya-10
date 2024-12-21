import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { INews, INewsMutation } from '../../types';


export const fetchNewsThunk = createAsyncThunk<INews[], void>(
  'news/fetchNewsThunk',
  async () => {
    const newsResponse = await axiosApi<INews[]>('/news');

    return newsResponse.data || [];
  }
);

export const addNewsThunk = createAsyncThunk<void, INewsMutation>(
  'news/addNewsThunk',
  async (INewsMutation) => {
    const formData = new FormData();

    const keys = Object.keys(INewsMutation) as (keyof INewsMutation)[];

    keys.forEach(key => {
      const value = INewsMutation[key];

      if(value !== null) {
        formData.append(key, value);
      }
    })

    await axiosApi.post('/news', formData);
  }
);