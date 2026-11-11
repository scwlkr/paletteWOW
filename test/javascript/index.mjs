import { readdirSync } from "node:fs"
import { fileURLToPath } from "node:url"

const directory = fileURLToPath(new URL(".", import.meta.url))
const testFiles = readdirSync(directory)
  .filter((file) => file.endsWith(".test.mjs"))
  .sort()

await Promise.all(testFiles.map((file) => import(new URL(file, import.meta.url))))
