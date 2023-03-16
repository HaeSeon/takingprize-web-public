import { Prize } from "./prize"

export interface User {
  email: string
  name: string
  id: string
  prizes: Prize[]
}
