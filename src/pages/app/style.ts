import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const AppRoot = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const SideBarStyle = styled.div<{ $isClosed?: boolean }>`
  transition: width 0.3s ease;
  position: relative;
  flex-shrink: 0;
  width: ${(props) => (props.$isClosed ? "100px" : "278px")};
  height: 100vh;
`;

export const MainWithHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;
  background-color: #F3F3F3;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const SidebarToggle = styled.button`
  position: absolute;
  top: 24px;
  right: -12px;
  background-color: #14b8a6;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }
`;

export const OutletContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  flex-grow: 1;
  overflow-y: auto;
  background-color: #F3F3F3;
`;
