import styled from "styled-components";
import { Drawer, IconButton, Typography, Box, Button } from "@mui/material";

const verdeEscuro = "#0b2b25";
const cinza = "#6f7d7d";

export const StyledDrawer = styled(Drawer)`
  .MuiBackdrop-root {
    background: transparent;
    opacity: 1;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  .MuiDrawer-paper {
    width: 400px;
    max-width: 100%;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  }
`;

export const DrawerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DrawerHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
`;

export const DrawerTitle = styled(Typography)`
  color: ${verdeEscuro} !important;
  font-weight: 700 !important;
  font-size: 24px !important;
`;

export const CloseIconButton = styled(IconButton)`
  color: ${cinza} !important;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05) !important;
  }
`;

export const DrawerContent = styled(Box)`
  flex: 1;
  padding: 24px;
  overflow-y: auto;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .section-title {
    color: ${verdeEscuro};
    font-weight: 700;
    font-size: 14px;
    white-space: nowrap;
    margin-right: 8px;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.64);
  }
`;

export const UserInfoRow = styled(Box)`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

export const InfoColumn = styled(Box)<{ $fullWidth?: boolean }>`
  flex: ${(p) => (p.$fullWidth ? 2 : 1)};
`;

export const FieldLabel = styled(Typography)`
  color: ${verdeEscuro} !important;
  font-size: 18px !important;
  margin-bottom: 4px !important;
  opacity: 0.8;
`;

export const FieldValue = styled(Typography)`
  color: ${verdeEscuro} !important;
  font-weight: 700 !important;
  font-size: 18px !important;
`;

export const LoadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 16px;
  text-align: center;
  height: 100%;
`;

export const ErrorContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 16px;
  text-align: center;
  height: 100%;
`;

export const ErrorDetails = styled(Typography)`
  color: ${cinza} !important;
  margin-top: 8px !important;
`;

export const EmptyContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 16px;
  text-align: center;
  height: 100%;
`;

export const DrawerFooter = styled(Box)`
  padding: 16px 24px;
  display: flex;
  justify-content: center;
`;

export const CloseFooterButton = styled(Button)`
  color: ${verdeEscuro} !important;
  border-color: ${verdeEscuro} !important;
  width: 180px !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  border-radius: 8px !important;

  &:hover {
    background-color: #00606d40 !important;
  }
`;
