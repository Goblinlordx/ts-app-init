import { ContextService } from "../Context/ContextService"
import { PostCommander } from "../Post/PostCommander"
import { PostRepository } from "../Post/PostRepository"
import { PostQuerier } from "../Post/PostQuerier"

export class App {
  public postRepository = new PostRepository()

  public contextService = new ContextService()

  public postQuerier = new PostQuerier(this.postRepository)
  public postCommander = new PostCommander(this.postRepository)
}
