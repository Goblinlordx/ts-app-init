import { IContext } from "../Context/entities/IContext"
import { Post } from "./entities/Post"

export class PostRepository {
  private store = new Map<string, Post>()

  async getById(ctx: IContext, id: string) {
    const post = this.store.get(id)

    if (!post) {
      throw new Error(`Post[${id}] Not Found`)
    }

    return post
  }

  async delete(ctx: IContext, id: string) {
    this.store.delete(id)
  }

  async save(ctx: IContext, ...items: Post[]) {
    items.forEach((item) => this.store.set(item.id, item))
  }
}
