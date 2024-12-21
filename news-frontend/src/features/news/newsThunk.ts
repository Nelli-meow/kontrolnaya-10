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

export const deleteNewsThunk = createAsyncThunk(
  'news/deleteNewsThunk',
  async (id: string) => {
    try {
      await axiosApi.delete(`/news/${id}`);
    } catch (error) {
      return ('Error');
    }
  }
);

export const getNewMessages = createAsyncThunk<INews[], string>(
  'news/getNewMessages',
  async (date) => {
    const newsResponse = await axiosApi<INews[]>(`/news?datetime=${date}`);

    return newsResponse.data;
  }
);

export const fetchNewsByIdThunk = createAsyncThunk(
  'news/fetchNewsById',
  async (id: string) => {
    try {
      const response = await axiosApi(`/news/${id}`);
      return response.data;
    } catch (error) {
      return('Error fetching news by ID');
    }
  }
);