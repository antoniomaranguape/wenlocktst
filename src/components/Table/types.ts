export interface ITableHeader {
  key: string;
  value: string;
  columnWidth?: string;
  sortArrows?: boolean;
  textAlign?: "left" | "center" | "right";
}

export interface TableListProps<T = object> {
  id?: string;
  data: T[];
  headers: ITableHeader[];
  width?: string;
  height?: string;
  isLoading?: boolean;
  titleMessage?: string;
  messageModule?: string;
  disablePagination?: boolean;
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  setCurrentPage?: (page: number | ((prev: number) => number)) => void;
  total?: number;
  limitPerPage?: number;
  changeRowPerPage?: (value: number) => void;
  options?: number[];
}
