import { App } from "../App/app"
import { getPostDataset } from "./dataset/post.dataset"

describe("PostQuerier", () => {
  it("can retrieve existing post", async () => {
    const app = new App()

    const ctx = await app.contextService.create()
    const { posts } = getPostDataset(ctx)
    app.postRepository.save(ctx, ...posts)

    const post = await app.postQuerier.getById(ctx, posts[0].id)
    expect(post).toBeTruthy()

    expect(() =>
      app.postQuerier.getById(ctx, "non-existant id")
    ).rejects.toBeTruthy()
  })
})
