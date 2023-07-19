export type PaginatedResponse<T> = {
  data: T[];
  pageTotal: number;
  totalItems: number;
};

export const defaultPaginatedResponse: PaginatedResponse<any> = {
  data: [],
  pageTotal: 0,
  totalItems: 0,
};

export type PaginateOptions = {
  search?: string;
  page?: number;
  limit?: number;
};

export const defaultPaginateOptions = {
  search: '',
  page: 1,
  limit: 10,
};
