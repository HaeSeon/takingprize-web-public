export interface PageResponse<T> {
  count: number // total_count
  result: T[]
}