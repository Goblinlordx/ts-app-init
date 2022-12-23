import { IContext } from "../../Context/entities/IContext"
import { Post } from "../entities/Post"

export const getPostDataset = (ctx: IContext) => {
  const posts = [
    {
      id: "5657069c-8794-4f9f-ba44-32ac29bae11b",
      createdAt: new Date("2022-12-18T03:28:05.316Z"),
      title: "Test title 1",
      content: "Test content 1",
    },
    {
      id: "6adc3dca-ef13-4ca4-941d-0a751a20af85",
      createdAt: new Date("2022-12-18T03:28:05.316Z"),
      title: "Test title 2",
      content: "Test content 2",
    },
  ] as Post[]

  return { posts }
}
