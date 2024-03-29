import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./slices/postsSlice";
import { commentsSlice } from "./slices/commentsSlice";
import { searchSlice } from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsSlice.reducer,
    search: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
