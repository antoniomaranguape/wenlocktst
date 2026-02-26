import { useState } from "react";
import { Loader2 } from "lucide-react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { organizeData } from "./utils/organizeData";
import type { ITableHeader, TableListProps } from "./types";
import {
  Empty,
  MessageModule,
  Pagination,
  Progress,
  TableBox,
  TableFooter,
  TitleMessage,
  TotalItems,
  Wrapper,
  WrapperNoData,
  PaginationControls,
  PageButton,
  TotalPages,
} from "./styles";

const DEFAULT_PAGE_SIZE = 10;
const PAGINATION_OPTIONS = [5, 10, 25, 50];

export function TableList<T extends object>({
  id,
  data,
  headers,
  width,
  height,
  isLoading = false,
  titleMessage = "Nenhum registro encontrado",
  messageModule = "Não há dados para exibir no momento.",
  disablePagination = false,
  currentPage: controlledPage,
  setCurrentPage: setControlledPage,
  totalItems: controlledTotalItems,
  itemsPerPage: controlledItemsPerPage,
  limitPerPage = DEFAULT_PAGE_SIZE,
  changeRowPerPage,
  options = PAGINATION_OPTIONS,
}: TableListProps<T>) {
  const [internalPage, setInternalPage] = useState(1);
  const [internalPageSize, setInternalPageSize] = useState(limitPerPage);

  const currentPage = controlledPage ?? internalPage;
  const setCurrentPage = setControlledPage ?? setInternalPage;
  const itemsPerPage = controlledItemsPerPage ?? internalPageSize;

  const totalItems = controlledTotalItems ?? data?.length ?? 0;
  const total = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedData = disablePagination
    ? data
    : (data ?? []).slice(start, start + itemsPerPage);

  const [organizedData, indexedHeader] = organizeData(paginatedData, headers);

  const nextPage = () => {
    if (currentPage < total) setCurrentPage((prev: number) => prev + 1);
  };
  const goBackPage = () => {
    if (currentPage > 1) setCurrentPage((prev: number) => prev - 1);
  };
  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(total);

  const handleChangePageSize = (value: number) => {
    setInternalPageSize(value);
    if (changeRowPerPage) changeRowPerPage(value);
    setCurrentPage(1);
  };

  // Estado 1: Loading
  if (isLoading) {
    return (
      <WrapperNoData width={width} height={height}>
        <Empty>
          <Progress>
            <Loader2 size={40} strokeWidth={2} />
          </Progress>
          <TitleMessage>Carregando...</TitleMessage>
        </Empty>
      </WrapperNoData>
    );
  }

  // Estado 2: Vazia — nenhum usuário registrado
  if (!data?.length) {
    return (
      <WrapperNoData width={width} height={height}>
        <Empty>
          <TitleMessage>{titleMessage}</TitleMessage>
          <MessageModule>{messageModule}</MessageModule>
        </Empty>
      </WrapperNoData>
    );
  }

  // Estado 3: Com dados
  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "auto",
          maxHeight: height ?? "calc(100vh - 320px)",
        }}
      >
        <Wrapper width={width} height={height}>
          <TableBox id={id}>
            <thead>
              <tr>
                {headers.map((header) => {
                  const textAlign = header.textAlign ?? (header.key === "actions" ? "right" : "left");
                  return (
                    <th
                      key={header.key}
                      style={{
                        width: header.columnWidth,
                        textAlign,
                      }}
                    >
                      {header.value}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {organizedData.map((row, i) => (
                <tr key={i}>
                  {Object.keys(row).map((key) => {
                    if (key === "$original") return null;
                    const header = indexedHeader[key];
                    const textAlign =
                      header?.textAlign ?? (key === "actions" ? "right" : "left");
                    const cellValue = row[key];
                    return (
                      <td
                        key={key}
                        style={{
                          width: header?.columnWidth,
                          textAlign,
                        }}
                      >
                        {cellValue !== undefined && cellValue !== null && cellValue !== ""
                          ? String(cellValue)
                          : "-"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </TableBox>
        </Wrapper>
      </div>

      {!disablePagination && (
        <TableFooter>
          <Pagination>
            <TotalItems>
              <h3>Total de itens:</h3>
              {totalItems}
            </TotalItems>
            <PaginationControls>
              <TotalItems>
                <h3>Itens por página:</h3>
                <select
                  value={itemsPerPage}
                  onChange={(e) => handleChangePageSize(Number(e.target.value))}
                  style={{
                    marginLeft: 4,
                    padding: "4px 8px",
                    borderRadius: 6,
                    border: "1px solid #e5e7eb",
                    fontSize: 14,
                  }}
                >
                  {options.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </TotalItems>
              <PaginationControls>
                <PageButton
                  type="button"
                  onClick={goToFirstPage}
                  disabled={currentPage <= 1}
                  aria-label="Primeira página"
                >
                  <ChevronsLeft size={18} />
                </PageButton>
                <PageButton
                  type="button"
                  onClick={goBackPage}
                  disabled={currentPage <= 1}
                  aria-label="Página anterior"
                >
                  <ChevronLeft size={18} />
                </PageButton>
                <PageButton $active type="button" disabled>
                  {currentPage}
                </PageButton>
                <TotalPages>de {total}</TotalPages>
                <PageButton
                  type="button"
                  onClick={nextPage}
                  disabled={currentPage >= total}
                  aria-label="Próxima página"
                >
                  <ChevronRight size={18} />
                </PageButton>
                <PageButton
                  type="button"
                  onClick={goToLastPage}
                  disabled={currentPage >= total}
                  aria-label="Última página"
                >
                  <ChevronsRight size={18} />
                </PageButton>
              </PaginationControls>
            </PaginationControls>
          </Pagination>
        </TableFooter>
      )}
    </>
  );
}

export default TableList;
export type { ITableHeader, TableListProps };
