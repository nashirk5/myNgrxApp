import { createAction, props } from "@ngrx/store";
import { PostInterface } from "src/app/_interface/post.interface";

const prefix = '[POST]';

export const getPost = createAction(`${prefix} Get Post`);

export const getPostSuccess = createAction(
    `${getPost.type}, Get Post Success`,
    props<{
        post: PostInterface[];
    }>()
);

export const showAddEditPost = createAction(
    `${prefix} Show Add Update Post`,
    props<{
        status: boolean
    }>()
);

export const hideAddEditPost = createAction(
    `${prefix} Hide Add Update Post`,
    props<{
        status: boolean
    }>()
)

export const deletePost = createAction(
    `${prefix} Delete Post`,
    props<{
        post: PostInterface
    }>()
);

export const deletePostSuccess = createAction(
    `${deletePost.type} Success`,
    props<{
        post: PostInterface
    }>()
);