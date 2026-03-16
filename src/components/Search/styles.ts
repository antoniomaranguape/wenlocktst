import styled from "styled-components";

const verdeEscuro = "#0b2b25";
const colorTeal = "#00aac1";
const fullBranco = "#ffffff";

export const Container = styled.div<{
  size?: string;
  height?: string;
}>`
  width: ${({ size }) => size ?? "285px"};
  height: ${({ height }) => height ?? "46px"};
  min-height: 46px;
  display: flex;
  align-items: center;
  background-color: ${fullBranco};
  padding: 0 12px;
  border-radius: 7px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #86868645;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e3e3e3;
  }

  &:focus-within {
    border: 2px solid ${colorTeal};
    outline: none;
  }

  input {
    flex: 1;
    border: none;
    color: ${verdeEscuro};
    margin-left: 8px;
    font-size: 16px;
    height: 100%;
    font-weight: 500;
    background: transparent;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${verdeEscuro};
      opacity: 0.86;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;
    color: #666;
    padding: 4px;

    &:hover {
      color: #333;
    }
  }

  @media (min-width: 1728px) {
    height: ${({ height }) => height ?? "56px"};
    min-height: 56px;
  }
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colorTeal};
`;
