export interface IContext {
  id: string
  timestamp: Date

  createUUID(): string
}
