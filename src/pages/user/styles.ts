import styled from "styled-components";
import { Paper, Button } from "@mui/material";

const verdeEscuro = "#0b2b25";
const colorTeal = "#00aac1";
const hoverTeal = "#00606d";
const colorLightGray = "#f5f5f5";
const colorNavy = "#0d1931";
const fullBranco = "#ffffff";

export const UsersContainer = styled.div`
  padding: 10px;

  @media (min-width: 1728px) {
    padding: 20px;
  }
`;

export const PageTitle = styled.h1`
  font-weight: bold;
  color: ${verdeEscuro};
  margin-bottom: 20px;
  font-size: 32px;

  @media (min-width: 1728px) {
    font-size: 38px;
  }
`;

export const UsersActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchFieldWrapper = styled.div`
  width: 285px;
  background-color: ${fullBranco};
  border-radius: 7px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #86868645;

  .MuiOutlinedInput-root {
    border: none;

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid #86868645;
      transition: border 0.2s ease;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border: 1px solid #86868680;
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 2px solid #00aac1;
      border-radius: 7px;
    }
  }

  &:hover {
    background-color: #e3e3e3;
  }

  .MuiInputBase-input::placeholder {
    color: ${verdeEscuro};
    opacity: 0.86;
  }

  .clear-btn {
    color: #666;
    &:hover {
      color: #333;
    }
  }
`;

export const AddButton = styled(Button)`
  background-color: ${colorTeal} !important;
  color: ${fullBranco} !important;
  border-radius: 8px !important;
  font-weight: bold !important;
  width: 180px !important;
  height: 46px !important;
  margin-right: 7px !important;
  text-transform: none !important;

  &:hover {
    background-color: ${hoverTeal} !important;
  }

  @media (min-width: 1728px) {
    font-size: 18px !important;
    width: 223px !important;
    height: 56px !important;
  }
`;

export const UsersTableContainer = styled(Paper)`
  background-color: ${colorLightGray} !important;
  border-radius: 6px !important;
  overflow: hidden !important;
  height: 430px !important;
  max-height: 430px !important;
  display: flex !important;
  flex-direction: column !important;
  padding-right: 10px !important;
  box-shadow: none !important;

  .empty-state,
  .loading-state,
  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    flex: 1;
    text-align: center;
    background-color: ${fullBranco};
  }

  .notfound-image {
    max-width: 130px;
    margin-bottom: 20px;
  }

  .empty-title {
    font-weight: 700;
    color: ${verdeEscuro};
    font-size: 24px;
  }

  .empty-subtitle,
  .error-details {
    color: ${verdeEscuro};
    text-align: center;
    font-size: 18px;
    width: 480px;
  }

  .loading-state .MuiCircularProgress-root {
    color: ${colorTeal};
  }

  .error-state .MuiAlert-root {
    margin-bottom: 16px;
  }

  .MuiTable-root {
    min-height: 135px;
  }

  .MuiTableHead-root .MuiTableRow-root {
    background-color: ${colorNavy};

    .MuiTableCell-root {
      color: ${fullBranco};
      font-weight: 500;
      border-bottom: none;

      &:first-of-type {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-of-type {
        padding-right: 60px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }

  .MuiTableBody-root .MuiTableRow-root {
    background-color: ${fullBranco};

    .MuiTableCell-root {
      border-radius: 0;
      border-bottom: none;
      height: 56px;
    }

    &:first-of-type .MuiTableCell-root {
      &:first-of-type {
        border-top-left-radius: 6px;
      }
      &:last-of-type {
        border-top-right-radius: 6px;
      }
    }

    &:last-of-type .MuiTableCell-root {
      &:first-of-type {
        border-bottom-left-radius: 6px;
      }
      &:last-of-type {
        border-bottom-right-radius: 6px;
      }
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;

    .action-button {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      box-shadow: 0px 2px 3px #0000000f;
      cursor: pointer;
      border: none;
      background-color: transparent;

      &:hover {
        background-color: ${colorTeal};
      }
    }
  }

  .pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin-top: auto;
  }

  .total-items {
    font-size: 14px;
    color: ${verdeEscuro};
    font-weight: 500;

    span {
      font-weight: 700;
    }
  }

  .items-per-page {
    font-size: 14px;
    color: ${verdeEscuro};
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-weight: 700;
    }
  }

  .pagination-controls {
    display: flex;
    align-items: center;

    .pagination-button {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #616c84;

      &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &.current-page {
        background-color: ${colorTeal};
        color: white;
        border-radius: 5px;
      }
    }

    .page-info {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      color: ${verdeEscuro};
      margin-left: 8px;
    }
  }

  @media (min-width: 1728px) {
    height: 600px !important;
    max-height: 600px !important;

    .empty-state .notfound-image,
    .loading-state .notfound-image,
    .error-state .notfound-image {
      max-width: 227px;
    }
  }
`;
