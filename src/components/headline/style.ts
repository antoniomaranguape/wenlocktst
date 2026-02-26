import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  width: calc(100% - 30px);
  flex-shrink: 0;
`;

export const UserDropdown = styled.div`
  display: none;
  position: absolute;
  top: 120%;
  right: 0;
  width: 220px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  z-index: 100;
  overflow: hidden;
`;

export const UserProfile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;

  &:hover ${UserDropdown} {
    display: block;
  }
`;

export const UserAvatar = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #0d1931;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  user-select: none;

  &:hover {
    transform: scale(1.05);
  }
`;

export const UserAvatarChevron = styled.div`
  position: absolute;
  bottom: 0;
  left: 28px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
`;

export const UserInfo = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #00000029;
  margin: 0;
  cursor: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserEmail = styled.p`
  font-size: 12px;
  color: #00606d;
  margin: 4px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: transparent;
  color: #00606d;
  cursor: pointer;
  font-size: 14px;
  text-align: left;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f1f3f5;
  }
`;
