import styled, { css } from "styled-components";

export const SidebarWrapper = styled.div`
  background-color: #1A2B3C;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
`;

export const SidebarHeader = styled.div`
  padding: 20px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  flex-shrink: 0;
`;

export const ImagemWenlock = styled.div`
  margin: 0;
  max-width: 100%;
  display: flex;
  align-items: center;

  img {
    max-height: 36px;
    width: auto;
    display: block;
  }
`;

export const ImagemWenlockMini = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 32px;
    width: auto;
    display: block;
  }
`;

export const SidebarNav = styled.nav`
  flex: 1;
  padding: 12px 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const menuItemActiveStyles = css`
  background-color: #00BCD4 !important;
  color: white !important;

  &:hover {
    background-color: #00ACC1 !important;
    color: white !important;
  }
`;

export const MenuItem = styled.button<{ $isActive?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  margin: 0;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }

  ${(props) => props.$isActive && menuItemActiveStyles}
`;

export const MenuIcon = styled.span`
  flex-shrink: 0;
  opacity: 0.95;
  display: inline-flex;
`;

export const MenuText = styled.span`
  flex: 1;
  text-align: left;
  white-space: nowrap;
`;

export const MenuChevron = styled.span<{ $isOpen?: boolean }>`
  flex-shrink: 0;
  transition: transform 0.2s ease;
  display: inline-flex;
  ${(props) => props.$isOpen && "transform: rotate(90deg);"}
`;

export const MenuGroup = styled.div`
  margin: 0;
`;

export const Submenu = styled.div`
  margin: 4px 0 0 8px;
  padding-left: 0;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const submenuItemActiveStyles = css`
  background-color: rgba(0, 188, 212, 0.35) !important;
  color: white !important;
`;

export const SubmenuItem = styled.button<{ $isActive?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  margin: 0;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  font-size: 13px;
  text-align: left;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: white;
  }

  ${(props) => props.$isActive && submenuItemActiveStyles}
`;

export const BotaoHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 20px;
    height: 20px;
    display: block;
  }
`;

export const SidebarFooter = styled.div`
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
  margin-top: auto;
`;

export const FooterInfo = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
  text-align: left;

  p {
    margin: 0 0 2px;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const FooterMini = styled.div`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;

  p {
    margin: 0;
  }
`;
