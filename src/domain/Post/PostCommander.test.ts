import { App } from "../App/app"

describe("PostCommander", () => {
  it("can save a create, update, and delete post", async () => {
    const app = new App()

    const ctx = await app.contextService.create()

    const input = {
      title: "test",
      content: "asdfsadf",
    }

    const id = await app.postCommander.create(ctx, input)
    const created = await app.postRepository.getById(ctx, id)
    expect(created.title).toBe(input.title)
    expect(created.content).toBe(input.content)

    const updateInput = {
      id,
      title: "updated title",
      content: "updated content",
    }
    await app.postCommander.update(ctx, updateInput)
    const updated = await app.postRepository.getById(ctx, id)
    expect(updated.title).toBe(updateInput.title)
    expect(updated.content).toBe(updateInput.content)

    await app.postCommander.delete(ctx, { id })
  })
})
