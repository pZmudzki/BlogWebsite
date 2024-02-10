import { configureStore } from "@reduxjs/toolkit";

import { postsSlice } from "./slices/postsSlice";
import { commentsSlice } from "./slices/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
  },
});
