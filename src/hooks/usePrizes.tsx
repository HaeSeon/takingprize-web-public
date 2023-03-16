import {useEffect, useState} from "react";
import {User} from "../models/user";
import {usePage} from "./usePage";
import {Prize} from "../models/prize";
import {getUserById} from "../modules/user";
import {getPrizes} from "../modules/prize";

export function usePrizes(id: string | undefined) {
  const [prizes, setPrizes] = useState<Prize[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [user, setUser] = useState<User>()

  const totalPage = Math.ceil(totalCount / 9)
  const userName = user?.name ?? ""
  const hasPrize = totalCount > 0

  const {
    page,
    goNext,
    goPrev
  } = usePage(totalPage)

  useEffect(() => {
    if (!id) {
      return
    }

    getUserById(id).then(setUser)

    getPrizes(id, page)
      .then((data) => {
        setTotalCount(data.count)
        setPrizes(data.result)
      })
      .catch(console.error)
  }, [id, page])

  return {
    prizes,
    userName,
    page,
    totalPage,
    hasPrize,
    goNext,
    goPrev
  }
}