import { getCookie, setCookie } from "../utils/cookie"
import axios from "axios"
import { message } from "antd"

export async function getUser() {
  const token = getCookie("accessJwtToken")
  const user = await (
    await axios.get("/auth/user", { headers: { Authorization: `Bearer ${token}` } })
  ).data
  return user
}

export const signUp = async (user: { email: string; name: string; password: string }) => {
  try {
    const response = await axios.post("/auth/signup", user)
    const { email, name, id, token } = response.data
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    setCookie("accessJwtToken", token) // 쿠키에 토큰 저장
    return response
  } catch (e: any) {
    if (e.response.data.message) {
      message.error(e.response.data.message)
    } else {
      message.error("일시적인 네트워크 요청 오류")
    }
  }
}

export const login = async (user: { email: string; password: string }) => {
  try {
    const response = await axios.post("/auth/login", user)
    const { email, name, id, token } = response.data
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    setCookie("accessJwtToken", token) // 쿠키에 토큰 저장
    return response
  } catch (e: any) {
    if (e.response.data.message) {
      message.error(e.response.data.message)
    } else {
      message.error("일시적인 네트워크 요청 오류")
    }
  }
}
