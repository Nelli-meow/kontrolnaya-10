import { createSlice } from '@reduxjs/toolkit';
import { addNewsThunk, deleteNewsThunk, fetchNewsThunk } from './newsThunk.ts';
import { RootState } from '../../app/store.ts';
import { INews } from '../../types';


interface INewsInitialState {
  newsItems: INews[];
  fetchingNews: boolean;
  createNews: boolean;
  deleteNews:  boolean;
}

const initialState: INewsInitialState = {
  newsItems: [],
  fetchingNews: false,
  createNews: false,
  deleteNews: false,
}

export const selectNewsItems = (state: RootState) => state.newsPosts.newsItems;
export const selectNewsLoading = (state: RootState) => state.newsPosts.fetchingNews;

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
      .addCase(addNewsThunk.pending, (state) => {
        state.createNews = true;
      })
      .addCase(addNewsThunk.fulfilled, (state) => {
        state.createNews = false;
      })
      .addCase(addNewsThunk.rejected, (state) => {
        state.createNews = false;
      })
      .addCase(deleteNewsThunk.pending, (state) => {
        state.deleteNews = true;
      })
      .addCase(deleteNewsThunk.fulfilled, (state) => {
        state.deleteNews = false;
      })
      .addCase(deleteNewsThunk.rejected, (state) => {
        state.deleteNews = false;
      })
  }
});



export const messagesReducer = messagesSlice.reducer;