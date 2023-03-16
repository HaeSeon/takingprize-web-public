import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export function usePage(lastPage: number) {
  const location = useLocation()
  const {search, pathname} = location
  const searchParams = new URLSearchParams(search)
  const defaultPage = parseInt(searchParams.get("page") ?? "NaN")
  const navigate = useNavigate()

  const [page, setPage] = useState(defaultPage ?? 1)

  useEffect(() => {
    searchParams.set("page", `${page}`)
    navigate(`${pathname}?${searchParams.toString()}`)
  }, [page])

  useEffect(() => {
    if (!page) {
      setPage(1)
    }
  }, [page])

  function goNext() {
    if (page === lastPage) {
      setPage(1)
    } else {
      setPage(prev => prev + 1)
    }
  }

  function goPrev() {
    if (page === 1) {
      setPage(lastPage)
    } else {
      setPage(prev => prev - 1)
    }
  }

  return {
    page,
    goNext,
    goPrev
  }
}