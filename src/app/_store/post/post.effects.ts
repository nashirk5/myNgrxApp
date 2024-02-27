import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromPost from './index';
import { map, switchMap } from "rxjs";
import { PostService } from "src/app/_services/post.service";
import { PostInterface } from "src/app/_interface/post.interface";

@Injectable()
export class PostEffects {

    constructor(private readonly actions$: Actions, private readonly postSrv: PostService) { }

    getPost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromPost.getPost.type),
            switchMap(() => this.postSrv.getPost()),
            map((post: PostInterface[]) => fromPost.getPostSuccess({ post }))
        )
    )

    createPost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromPost.createPost.type),
            switchMap(({ post }) => this.postSrv.createPost(post)),
            map((post: PostInterface) => fromPost.createPostSuccess({ post }))
        )
    )

    deletePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromPost.deletePost.type),
            switchMap(({ post }) => this.postSrv.deletePost(post)),
            map((post: PostInterface) => fromPost.deletePostSuccess({ post }))
        )
    )

}