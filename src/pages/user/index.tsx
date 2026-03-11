import type React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  IconButton,
  InputAdornment,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon,
} from "@mui/icons-material";
import { ViewIcon } from "../../assets/icons/ViewIcon";
import { PenIcon } from "../../assets/icons/PenIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { useUsers } from "../../hooks/useUsers";
import { useUserDetails } from "../../hooks/useUserDetails";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import UserDetailsDrawer from "../../components/UserDetailsDrawer";
import ConfirmationModal from "../../components/ConfirmationModal";
import NotFoundImg from "../../assets/imagens/notfound-img.svg";
import {
  UsersContainer,
  PageTitle,
  UsersActions,
  SearchFieldWrapper,
  AddButton,
  UsersTableContainer,
} from "./styles";

const User = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const {
    user,
    isOpen,
    isLoading: isLoadingUserDetails,
    isError: isErrorUserDetails,
    error: errorUserDetails,
    openUserDetails,
    closeUserDetails,
  } = useUserDetails();

  const { isDeleteModalOpen, openDeleteModal, closeDeleteModal, confirmDelete } =
    useDeleteUser();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data: usersData, isLoading, isError, error } = useUsers({
    page,
    limit: itemsPerPage,
    search: debouncedSearch,
  });

  const users = usersData?.items ?? [];
  const totalItems = usersData?.meta?.totalItems ?? 0;
  const totalPages = usersData?.meta?.totalPages ?? 0;
  const currentPage = usersData?.meta?.currentPage ?? 1;

  useEffect(() => {
    if (usersData?.meta?.currentPage) setPage(usersData.meta.currentPage);
  }, [usersData?.meta?.currentPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleClearSearch = () => setSearchTerm("");

  const handleFirstPage = () => setPage(1);
  const handlePreviousPage = () => page > 1 && setPage(page - 1);
  const handleNextPage = () => page < totalPages && setPage(page + 1);
  const handleLastPage = () => setPage(totalPages);

  const handleViewUser = (userId: string) => openUserDetails(userId);
  const handleAddUser = () => navigate("/usuarios/cadastro");
  const handleDeleteUser = (userId: string) => openDeleteModal(userId);
  const handleEditUser = (userId: string) => navigate(`/usuarios/edit/${userId}`);

  const renderTableContent = () => {
    if (isLoading) {
      return (
        <div className="loading-state">
          <CircularProgress size={40} />
        </div>
      );
    }

    if (isError) {
      return (
        <div className="error-state">
          <Alert severity="error">
            Erro ao carregar usuários. Por favor, tente novamente.
          </Alert>
          <Typography variant="body2" className="error-details">
            {error instanceof Error ? error.message : "Erro desconhecido"}
          </Typography>
        </div>
      );
    }

    if (users.length === 0) {
      return (
        <div className="empty-state">
          {searchTerm ? (
            <img
              src={NotFoundImg}
              alt="Nenhum resultado"
              className="notfound-image"
            />
          ) : null}
          <Typography variant="h6" className="empty-title">
            {searchTerm
              ? "Nenhum Resultado Encontrado"
              : "Nenhum Usuário Registrado"}
          </Typography>
          <Typography variant="body2" className="empty-subtitle">
            {searchTerm
              ? "Não foi possível achar nenhum resultado para sua busca. Tente refazer a pesquisa para encontrar o que busca."
              : "Clique em 'Cadastrar Usuário' para começar a cadastrar."}
          </Typography>
        </div>
      );
    }

    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#0B2B25" }}>Nome</TableCell>
              <TableCell align="right">Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {users.map((u) => (
              <TableRow key={u.id} sx={{ position: "relative", top: 10 }}>
                <TableCell>{u.name}</TableCell>
                <TableCell align="right" className="action-buttons">
                  <div
                    className="action-button view-button"
                    onMouseEnter={() => setHoveredButton(`view-${u.id}`)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => handleViewUser(u.id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleViewUser(u.id)
                    }
                    role="button"
                    tabIndex={0}
                  >
                    <ViewIcon isHovered={hoveredButton === `view-${u.id}`} />
                  </div>
                  <div
                    className="action-button edit-button"
                    onMouseEnter={() => setHoveredButton(`edit-${u.id}`)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => handleEditUser(u.id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleEditUser(u.id)
                    }
                    role="button"
                    tabIndex={0}
                  >
                    <PenIcon isHovered={hoveredButton === `edit-${u.id}`} />
                  </div>
                  <div
                    className="action-button delete-button"
                    onMouseEnter={() => setHoveredButton(`delete-${u.id}`)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => handleDeleteUser(u.id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleDeleteUser(u.id)
                    }
                    role="button"
                    tabIndex={0}
                  >
                    <TrashIcon isHovered={hoveredButton === `delete-${u.id}`} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <UsersContainer>
      <div className="users-header">
        <PageTitle>Usuários</PageTitle>
      </div>

      <UsersActions>
        <SearchFieldWrapper>
          <TextField
            placeholder="Pesquisa"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment:
                searchTerm !== "" ? (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="clear search"
                      onClick={handleClearSearch}
                      edge="end"
                      size="small"
                      className="clear-btn"
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ) : null,
            }}
          />
        </SearchFieldWrapper>
        <AddButton variant="contained" startIcon={<AddIcon />} onClick={handleAddUser}>
          Cadastrar Usuário
        </AddButton>
      </UsersActions>

      <UsersTableContainer elevation={0}>
        {renderTableContent()}

        <div className="pagination-container">
          <div className="total-items">
            Total de itens: <span>{totalItems}</span>
          </div>

          <div className="pagination-controls">
            <div className="items-per-page">
              Itens por página <span>{itemsPerPage}</span>
            </div>
            <IconButton
              onClick={handleFirstPage}
              disabled={page === 1}
              className={`pagination-button ${page === 1 ? "disabled" : ""}`}
            >
              <FirstPageIcon />
            </IconButton>
            <IconButton
              onClick={handlePreviousPage}
              disabled={page === 1}
              className={`pagination-button ${page === 1 ? "disabled" : ""}`}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <div className="pagination-button current-page">{currentPage}</div>
            <IconButton
              onClick={handleNextPage}
              disabled={page === totalPages || totalPages === 0}
              className={`pagination-button ${
                page === totalPages || totalPages === 0 ? "disabled" : ""
              }`}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
            <IconButton
              onClick={handleLastPage}
              disabled={page === totalPages || totalPages === 0}
              className={`pagination-button ${
                page === totalPages || totalPages === 0 ? "disabled" : ""
              }`}
            >
              <LastPageIcon />
            </IconButton>
            <div className="page-info">de {totalPages}</div>
          </div>
        </div>
      </UsersTableContainer>

      <UserDetailsDrawer
        isOpen={isOpen}
        onClose={closeUserDetails}
        user={user}
        isLoading={isLoadingUserDetails}
        isError={isErrorUserDetails}
        error={errorUserDetails as Error}
      />

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        title="Deseja excluir?"
        message="O usuário será excluído."
      />
    </UsersContainer>
  );
};

export default User;
