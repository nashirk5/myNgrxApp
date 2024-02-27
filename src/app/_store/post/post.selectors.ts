import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./post.model";

export const selectPostState = createFeatureSelector<PostState>('post');
export const selectPostList = createSelector(selectPostState, (state) => state.post);
export const selectPostIsLoading = createSelector(selectPostState, (state) => state.isLoading);
export const selectPostAddEdit = createSelector(selectPostState, (state) => state.showAddEditPost);