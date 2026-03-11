import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #ffffff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(100% - 30px);
  flex-shrink: 0;
  border-bottom: 1px solid #e2e8f0;

  @media (min-width: 1728px) {
    padding: 0 32px;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const ArrowIndicator = styled.div<{ $open?: boolean }>`
  position: absolute;
  bottom: -5px;
  right: 2px;
  background-color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  svg {
    font-size: 16px;
    color: #0d1931;
  }

  ${({ $open }) =>
    $open &&
    `
    svg {
      color: #6f7d7d;
    }
  `}
`;

export const LogoutText = styled.span`
  font-weight: 700;
  color: #0b2b25;
`;
