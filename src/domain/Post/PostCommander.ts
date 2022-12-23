import { IContext } from "../Context/entities/IContext"
import { Post } from "./entities/Post"
import { PostRepository } from "./PostRepository"

export type PostCreateInput = {
  title: string
  content: string
}

export type PostUpdateInput = {
  id: string
  title?: string
  content?: string
}

export type PostDeleteInput = {
  id: string
}

export class PostCommander {
  constructor(protected postRepository: PostRepository) {}

  async create(ctx: IContext, input: PostCreateInput): Promise<string> {
    const post = {
      ...input,
      id: ctx.createUUID(),
      createdAt: ctx.timestamp,
    }

    await this.postRepository.save(ctx, post)

    return post.id
  }

  async update(ctx: IContext, input: PostUpdateInput): Promise<string> {
    const post = await this.postRepository.getById(ctx, input.id)

    Object.assign(post, input)

    await this.postRepository.save(ctx, post)

    return post.id
  }

  async delete(ctx: IContext, input: PostDeleteInput): Promise<string> {
    await this.postRepository.getById(ctx, input.id)

    await this.postRepository.delete(ctx, input.id)

    return input.id
  }
}
