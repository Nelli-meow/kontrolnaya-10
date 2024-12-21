import { configureStore } from '@reduxjs/toolkit';
import { messagesReducer } from '../features/book-messages/messagesSlice.ts';


export const store = configureStore({
  reducer: {
    bookMessages: messagesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;