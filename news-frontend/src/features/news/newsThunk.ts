import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { INews } from '../../types';


export const fetchNewsThunk = createAsyncThunk<INews[], void>(
  'news/fetchNewsThunk',
  async () => {
    const newsResponse = await axiosApi<INews[]>('/news');

    return newsResponse.data || [];
  }
);