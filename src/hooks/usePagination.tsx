import {useEffect, useState} from "react";

interface Pagination {
  page: number
  size: number
}

export function usePagination(
  defaultPage = 1,
  defaultSize = 9
) {
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(defaultSize)
  const [pagination, setPagination] = useState<Pagination>({
    page: defaultPage,
    size: defaultSize,
  })

  useEffect(() => {
    setPagination({
      page, size
    })
  }, [page, size])

  function move(value: Pagination) {
    setPage(value.page)
    setSize(value.size)
  }

  return {
    pagination,
    move,
  }
}