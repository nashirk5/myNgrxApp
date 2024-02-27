import { PostInterface } from "src/app/_interface/post.interface";

export interface PostState {
    isLoading: boolean;
    showAddEditPost: boolean;
    post: PostInterface[]
}