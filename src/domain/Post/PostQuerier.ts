import { IContext } from "../Context/entities/IContext"
import { Post } from "./entities/Post"
import { PostRepository } from "./PostRepository"

export class PostQuerier {
  constructor(protected postRepository: PostRepository) {}

   getById(ctx: IContext, id: string): Promise<Post> {
    return this.postRepository.getById(ctx, id)
  }
}
