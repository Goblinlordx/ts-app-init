import repl from "repl"
import { App } from "../../domain/App/app"

;(global as any).APP = new App()

console.log(`App instance can be accessed via "APP" global variable`)
repl.start("app> ")
