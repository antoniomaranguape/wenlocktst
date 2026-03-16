import {
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import type { User } from "../../types/user.interface";
import {
  StyledDrawer,
  DrawerContainer,
  DrawerHeader,
  DrawerTitle,
  CloseIconButton,
  DrawerContent,
  SectionHeader,
  UserInfoRow,
  InfoColumn,
  FieldLabel,
  FieldValue,
  LoadingContainer,
  ErrorContainer,
  ErrorDetails,
  EmptyContainer,
  DrawerFooter,
  CloseFooterButton,
} from "./styles";
import { Close as CloseIcon } from "@mui/icons-material";

interface UserDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "N/A";
  try {
    return new Date(dateString).toLocaleDateString("pt-BR");
  } catch {
    return "Data inválida";
  }
};

const formatMatricula = (matricula: string | undefined): string => {
  if (!matricula) return "N/A";
  const clean = matricula.replace(/\D/g, "");
  if (clean.length <= 3) return clean;
  return `${clean.slice(0, 3)}.${clean.slice(3)}`;
};

const UserDetailsDrawer = ({
  isOpen,
  onClose,
  user,
  isLoading,
  isError,
  error,
}: UserDetailsDrawerProps) => {
  return (
    <StyledDrawer anchor="right" open={isOpen} onClose={onClose}>
      <DrawerContainer>
        <DrawerHeader>
          <DrawerTitle variant="h6">Visualizar Usuário</DrawerTitle>
          <CloseIconButton aria-label="close" onClick={onClose} size="small">
            <CloseIcon />
          </CloseIconButton>
        </DrawerHeader>

        <DrawerContent>
          {isLoading ? (
            <LoadingContainer>
              <CircularProgress size={40} />
            </LoadingContainer>
          ) : isError ? (
            <ErrorContainer>
              <Alert severity="error">Erro ao carregar dados do usuário</Alert>
              <ErrorDetails variant="body2">
                {error?.message ?? "Erro desconhecido"}
              </ErrorDetails>
            </ErrorContainer>
          ) : user ? (
            <>
              <SectionHeader>
                <Typography variant="subtitle2" className="section-title">
                  Dados do Usuário
                </Typography>
                <div className="section-line" />
              </SectionHeader>

              <UserInfoRow>
                <InfoColumn>
                  <FieldLabel variant="body2">Nome</FieldLabel>
                  <FieldValue variant="body1">{user.name}</FieldValue>
                </InfoColumn>
                <InfoColumn>
                  <FieldLabel variant="body2">Matrícula</FieldLabel>
                  <FieldValue variant="body1">
                    {formatMatricula(user.matricula)}
                  </FieldValue>
                </InfoColumn>
              </UserInfoRow>

              <UserInfoRow>
                <InfoColumn $fullWidth>
                  <FieldLabel variant="body2">E-mail</FieldLabel>
                  <FieldValue variant="body1">{user.email}</FieldValue>
                </InfoColumn>
              </UserInfoRow>

              <SectionHeader>
                <Typography variant="subtitle2" className="section-title">
                  Detalhes
                </Typography>
                <div className="section-line" />
              </SectionHeader>

              <UserInfoRow>
                <InfoColumn>
                  <FieldLabel variant="body2">Data de criação</FieldLabel>
                  <FieldValue variant="body1">
                    {formatDate(user.createdAt)}
                  </FieldValue>
                </InfoColumn>
                <InfoColumn>
                  <FieldLabel variant="body2">Última edição</FieldLabel>
                  <FieldValue variant="body1">
                    {user.updatedAt && user.updatedAt !== user.createdAt
                      ? formatDate(user.updatedAt)
                      : "Nenhuma"}
                  </FieldValue>
                </InfoColumn>
              </UserInfoRow>
            </>
          ) : (
            <EmptyContainer>
              <Typography variant="body1">Nenhum usuário selecionado</Typography>
            </EmptyContainer>
          )}
        </DrawerContent>

        <DrawerFooter>
          <CloseFooterButton variant="outlined" onClick={onClose}>
            Fechar
          </CloseFooterButton>
        </DrawerFooter>
      </DrawerContainer>
    </StyledDrawer>
  );
};

export default UserDetailsDrawer;
