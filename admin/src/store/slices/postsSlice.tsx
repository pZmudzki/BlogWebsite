import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Post = {
  id: string;
  type:
    | "Wierszem pisane"
    | "Scenariuse pisane życiem"
    | "Z medycznego punktu widzenia"
    | "Taniec";
  title: string;
  content: string;
  imgUrl?: string;
  videoUrl?: string;
  createdAt: Date;
  views: number;
  archived: boolean;
};

type PostsState = {
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
      state.posts.concat(action.payload);
    },
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    updatePost(state, action: PayloadAction<Post>) {
      const idx = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts[idx] = action.payload;
    },
    deletePost(state, action: PayloadAction<{ id: string }>) {
      const idx = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts.splice(idx, 1);
    },
  },
});

export const { setPosts, addPost, updatePost, deletePost } = postsSlice.actions;
