import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Post = {
  _id: string;
  type:
    | "Wierszem pisane"
    | "Scenariuse pisane życiem"
    | "Z medycznego punktu widzenia"
    | "Taniec";
  title: string;
  content: string;
  imageUrl?: string[];
  videoUrl?: string;
  createdAt: Date;
  views: number;
  archived: boolean;
};

export type PostsState = {
  posts: Post[];
};

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      const ids: String[] = [];
      state.posts.map((statePost) => {
        ids.push(statePost._id);
      });
      action.payload.map((post) => {
        if (!ids.includes(post._id)) {
          state.posts.push(post);
        }
      });
    },
    addPost(state, action: PayloadAction<Post>) {
      if (!state.posts.includes(action.payload)) {
        state.posts.push(action.payload);
      }
    },
    updatePost(state, action: PayloadAction<Post>) {
      const idx = state.posts.findIndex(
        (post) => post._id === action.payload._id
      );
      state.posts[idx] = action.payload;
    },
    deletePost(state, action: PayloadAction<{ _id: string }>) {
      const idx = state.posts.findIndex(
        (post) => post._id === action.payload._id
      );
      state.posts.splice(idx, 1);
    },
  },
});

export const { setPosts, addPost, updatePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
