import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { IComments } from '../../types';
import { addCommentsThunk, deleteCommentsThunk, fetchCommentsThunk } from './commentsThunk.ts';


interface ICommentsInitialState {
  commentsItems: IComments[];
  fetchingComments: boolean;
  createComments: boolean;
  deleteComments:  boolean;
}

const initialState: ICommentsInitialState = {
  commentsItems: [],
  fetchingComments: false,
  createComments: false,
  deleteComments: false,
}

export const selectCommentsItems = (state: RootState) => state.comments.commentsItems;
export const selectCommentsLoading = (state: RootState) => state.comments.fetchingComments;

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsThunk.pending, (state) => {
        state.fetchingComments = true;
      })
      .addCase(fetchCommentsThunk.fulfilled, (state, {payload: comments}) => {
        state.fetchingComments = false;
        state.commentsItems = comments;
      })
      .addCase(fetchCommentsThunk.rejected, (state) => {
        state.fetchingComments = false;
      })
      .addCase(addCommentsThunk.pending, (state) => {
        state.createComments = true;
      })
      .addCase(addCommentsThunk.fulfilled, (state) => {
        state.createComments = false;
      })
      .addCase(addCommentsThunk.rejected, (state) => {
        state.createComments = false;
      })
      .addCase(deleteCommentsThunk.pending, (state) => {
        state.deleteComments = true;
      })
      .addCase(deleteCommentsThunk.fulfilled, (state) => {
        state.deleteComments = false;
      })
      .addCase(deleteCommentsThunk.rejected, (state) => {
        state.deleteComments = false;
      })
  }
});



export const commentsReducer = commentsSlice.reducer;