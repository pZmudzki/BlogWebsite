import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Comment = {
  id: string;
  postId: string;
  name: string;
  email: string;
  comment: string;
  createdAt: Date;
  read: boolean;
  accepted: boolean;
};

type CommentsState = {
  comments: Comment[];
};

const initialState: CommentsState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, action: PayloadAction<Comment[]>) {
      state.comments.concat(action.payload);
    },
    updateComment(state, action: PayloadAction<Comment>) {
      const idx = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      state.comments[idx] = action.payload;
    },
  },
});

export const { setComments, updateComment } = commentsSlice.actions;
