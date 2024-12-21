import { configureStore } from '@reduxjs/toolkit';
import { messagesReducer } from '../features/news/newsSlice.ts';


export const store = configureStore({
  reducer: {
    news: messagesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;