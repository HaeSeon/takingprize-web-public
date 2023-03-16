import { message } from "antd"
import axios from "axios"
import { Prize } from "../models/prize"
import { PageResponse } from "../models/common"

export const postPrize = async (userId: string, prize: Prize) => {
  try {
    await axios.post(`/prizes?userId=${userId}`, prize)
    message.open({
      content: "작성 완료되었습니다.  ",
      icon: " 🏆 ",
      style: {
        marginTop: "75vh",
        fontFamily: "nanum",
        fontSize: "1.5rem",
      },
    })
  } catch (e: any) {
    message.error("작성을 완료하지 못했습니다. ")
  }
}

export async function getPrizes(userId: string, page: number): Promise<PageResponse<Prize>> {
  return await axios
    .get<PageResponse<Prize>>(`/prizes?userId=${userId}&page=${page}`)
    .then((resp) => resp.data)
}
