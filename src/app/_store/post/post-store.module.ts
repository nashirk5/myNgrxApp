import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { postReducer } from "./post.reducers";
import { EffectsModule } from "@ngrx/effects";
import { PostEffects } from "./post.effects";

@NgModule({
    imports: [
        StoreModule.forFeature('post', postReducer),
        EffectsModule.forFeature([PostEffects])
    ]
})
export class PostStoreModule { }