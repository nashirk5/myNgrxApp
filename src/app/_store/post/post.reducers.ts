import { createReducer, on } from "@ngrx/store";
import { PostState } from "./post.model";
import * as fromPost from "./index";
import { Actions } from "@ngrx/store-devtools/src/reducer";

export const initialPostState: PostState = {
    isLoading: false,
    showAddEditPost: false,
    post: []
}

export const reducer = createReducer<PostState>(
    initialPostState,
    on(fromPost.getPost, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fromPost.getPostSuccess, (state, { post }) => {
        return {
            ...state,
            isLoading: false,
            post
        }
    }),
    on(fromPost.showAddEditPost, (state) => {
        return {
            ...state,
            showAddEditPost: true,
        }
    }),
    on(fromPost.hideAddEditPost, (state) => {
        return {
            ...state,
            showAddEditPost: false,
        }
    }),
    on(fromPost.deletePost, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fromPost.deletePostSuccess, (state, { post }) => {
        return {
            ...state,
            isLoading: false,
            post: state.post.filter((p) => p.id !== post.id)
        }
    }),
    on(fromPost.createPost, (state) => {
        return {
            ...state,
            isLoading: true
        }
    }),
    on(fromPost.createPostSuccess, (state, { post }) => {
        return {
            ...state,
            isLoading: false,
            post: [...state.post, post]
        }
    })
)

export function postReducer(state = initialPostState, actions: Actions): PostState {
    return reducer(state, actions);
}