import styled from "styled-components";
import { Paper, Box, Typography, Button } from "@mui/material";

const verdeEscuro = "#0b2b25";
const colorTeal = "#00aac1";
const hoverTeal = "#00606d";

export const UserFormContainer = styled.div`
  padding: 0 32px 32px;
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: ${verdeEscuro};

  a {
    color: ${colorTeal};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  .breadcrumb-separator {
    color: #868686;
  }
`;

export const PageHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  .back-link .MuiIconButton-root {
    color: ${verdeEscuro};
    padding: 8px;

    &:hover {
      background-color: rgba(11, 43, 37, 0.08);
    }
  }
`;

export const PageTitle = styled(Typography)`
  color: ${verdeEscuro} !important;
  font-weight: 700 !important;
  font-size: 1.5rem !important;
`;

export const FormPaper = styled(Paper)`
  padding: 24px !important;
  border-radius: 6px !important;
  box-shadow: 0px 1px 4px #00000029 !important;
  background-color: #fff !important;
`;

export const FormSection = styled(Box)`
  margin-bottom: 32px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled(Typography)`
  color: ${verdeEscuro} !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  white-space: nowrap;
`;

export const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #e0e0e0;
`;

export const FormRow = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  .char-limit {
    font-size: 12px;
    color: #666;
    margin-top: 4px;
  }

  .MuiTextField-root {
    width: 100%;
  }
`;

export const FormActions = styled(Box)`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
`;

export const CancelButton = styled(Button)`
  border-radius: 8px !important;
  border: 1px solid ${verdeEscuro} !important;
  color: ${verdeEscuro} !important;
  font-weight: 600 !important;
  text-transform: none !important;

  &:hover {
    border-color: ${verdeEscuro} !important;
    background-color: rgba(11, 43, 37, 0.05) !important;
  }
`;

export const SaveButton = styled(Button)`
  border-radius: 8px !important;
  background-color: ${colorTeal} !important;
  color: white !important;
  font-weight: 600 !important;
  text-transform: none !important;
  min-width: 120px !important;

  &:hover {
    background-color: ${hoverTeal} !important;
  }
`;
