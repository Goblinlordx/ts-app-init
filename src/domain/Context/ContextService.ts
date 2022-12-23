import { randomUUID } from "crypto"

export class ContextService {
  create() {
    return {
      id: randomUUID(),
      timestamp: new Date(),
      createUUID: randomUUID,
    }
  }
}
