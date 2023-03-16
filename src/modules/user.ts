import axios from "axios"

export async function getUserById(id: string) {
  const user = await (await axios.get(`/users?id=${id}`)).data
  return user
}
