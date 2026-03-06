import styled from "styled-components";
import { Dialog, DialogContent, Typography, Button, Box } from "@mui/material";

const verdeEscuro = "#0b2b25";
const colorTeal = "#00aac1";
const hoverTeal = "#00606d";

export const StyledDialog = styled(Dialog)`
  .MuiBackdrop-root {
    background: transparent;
    opacity: 1;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  .MuiDialog-paper {
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 1px 4px #00000029;
  }
`;

export const StyledDialogContent = styled(DialogContent)`
  padding: 24px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ModalTitle = styled(Typography)`
  color: ${verdeEscuro} !important;
  font-weight: 700 !important;
  font-size: 26px !important;
  margin-bottom: 8px !important;
`;

export const ModalMessage = styled(Typography)`
  color: ${verdeEscuro} !important;
  font-size: 18px !important;
  margin-bottom: 24px !important;
  font-weight: 500 !important;
`;

export const ModalActions = styled(Box)`
  display: flex;
  gap: 16px;
  width: 100%;
  justify-content: center;
`;

export const CancelButton = styled(Button)`
  min-width: 120px !important;
  border-radius: 8px !important;
  border: 1px solid ${verdeEscuro} !important;
  color: ${verdeEscuro} !important;
  font-weight: 700 !important;
  padding: 8px 16px !important;
  text-transform: none !important;
  font-size: 18px !important;

  &:hover {
    background-color: rgba(11, 43, 37, 0.05) !important;
  }
`;

export const ConfirmButton = styled(Button)`
  min-width: 120px !important;
  border-radius: 8px !important;
  background-color: ${colorTeal} !important;
  color: white !important;
  font-weight: 700 !important;
  padding: 8px 16px !important;
  text-transform: none !important;
  font-size: 18px !important;

  &:hover {
    background-color: ${hoverTeal} !important;
  }
`;
