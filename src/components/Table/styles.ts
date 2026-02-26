import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Wrapper = styled.div<{ width?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? "100%"};
  max-height: ${({ height }) => height ?? "530px"};
`;

export const WrapperNoData = styled.div<{ width?: string; height?: string }>`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: ${({ width }) => width ?? "100%"};
  border-radius: 8px;
  box-shadow: none;
  margin-top: 24px;
  min-height: 280px;
  justify-content: center;
  align-items: center;
`;

export const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  thead th {
    position: sticky;
    top: 0;
    background-color: #14b8a6;
    z-index: 1;
  }

  thead {
    background-color: #14b8a6;
    height: 52px;

    tr th {
      font-size: 14px;
      color: #ffffff;
      text-align: left;
      padding: 12px 16px;
      font-weight: 700;
      letter-spacing: 0;
      line-height: 100%;

      &:first-child {
        padding-left: 24px;
      }
      &:last-child {
        padding-right: 24px;
      }
    }
  }

  tbody {
    tr {
      cursor: default;
      border-bottom: 1px solid rgba(193, 193, 193, 0.4);
      height: 52px;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: #e6faf8 !important;
      }

      &:last-child {
        border-bottom: none;
      }
    }

    td {
      color: #081015;
      padding: 12px 16px;
      overflow-wrap: break-word;
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      line-height: 100%;

      &:first-child {
        padding-left: 24px;
      }
      &:last-child {
        padding-right: 24px;
      }
    }
  }
`;

export const TableFooter = styled.footer`
  width: 100%;
  padding: 16px 0 0;
  background: transparent;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const TotalItems = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  color: #081015;
  font-size: 14px;
  font-weight: 600;

  h3 {
    color: #555;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin: auto;
  justify-content: center;
  padding: 48px 24px;
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  svg {
    animation: ${spin} 0.8s linear infinite;
  }
`;

export const TitleMessage = styled.div`
  text-align: center;
  color: #111214;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

export const MessageModule = styled.div`
  text-align: center;
  font-weight: 400;
  color: #4a4a4a;
  font-size: 16px;
  margin: 0;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: ${({ $active }) => ($active ? "#14b8a6" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#374151")};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#0d9488" : "#f3f4f6")};
    border-color: #d1d5db;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TotalPages = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
  margin-left: 4px;
`;
