export interface PagedResponse<T> {
  data: T[],
  lastItem:T,
  page: number,
  pageSize: number,
  hasNext: boolean,
  hasPrevious: boolean,
}
