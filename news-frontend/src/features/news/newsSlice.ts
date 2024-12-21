import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsThunk } from './newsThunk.ts';
import { RootState } from '../../app/store.ts';


interface INewsInitialState {
  newsItems: [];
  fetchingNews: boolean;
  createNews: boolean;
}

const initialState: INewsInitialState = {
  newsItems: [],
  fetchingNews: false,
  createNews: false,
}

export const selectNewsItems = (state: RootState) => state.news.newsItems;
export const selectNewsLoading = (state: RootState) => state.news.fetchingNews;

export const messagesSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsThunk.pending, (state) => {
        state.fetchingNews = true;
      })
      .addCase(fetchNewsThunk.fulfilled, (state, {payload: news}) => {
        state.fetchingNews = false;
        state.newsItems = news;
      })
      .addCase(fetchNewsThunk.rejected, (state) => {
        state.fetchingNews = false;
      })
  }
});



export const messagesReducer = messagesSlice.reducer;