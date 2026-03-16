import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  IconButton,
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
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon,
} from "@mui/icons-material";
import { Search } from "../../components/Search";
import { ViewIcon } from "../../assets/icons/ViewIcon";
import { PenIcon } from "../../assets/icons/PenIcon";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import type { User } from "../../types/user.interface";
import { useUsers } from "../../hooks/useUsers";
import { useDeleteUser } from "../../hooks/useDeleteUser";
import ConfirmationModal from "../../components/ConfirmationModal";
import NoResultsImg from "../../assets/imagens/nonusers.svg";
import {
  UsersContainer,
  PageTitle,
  UsersActions,
  AddButton,
  UsersTableContainer,
} from "./styles";

const UserPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const { isDeleteModalOpen, openDeleteModal, closeDeleteModal, confirmDelete } =
    useDeleteUser();

  const handleSearch = (value: string) => {
    setDebouncedSearch(value);
    setPage(1);
  };

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

  const handleFirstPage = () => setPage(1);
  const handlePreviousPage = () => page > 1 && setPage(page - 1);
  const handleNextPage = () => page < totalPages && setPage(page + 1);
  const handleLastPage = () => setPage(totalPages);

  const handleViewUser = (userId: string) => navigate(`/user/visualizar/${userId}`);
  const handleAddUser = () => navigate("/user/cadastro");
  const handleDeleteUser = (userId: string) => openDeleteModal(userId);
  const handleEditUser = (userId: string) => navigate(`/user/edit/${userId}`);

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
      const isNoSearchResults = Boolean(debouncedSearch);
      return (
        <div className="empty-state">
          {isNoSearchResults && (
            <img
              src={NoResultsImg}
              alt="Nenhum resultado encontrado"
              className="notfound-image"
            />
          )}
          <Typography variant="h6" className="empty-title">
            {isNoSearchResults
              ? "Nenhum Resultado Encontrado"
              : "Nenhum Usuário Registrado"}
          </Typography>
          {isNoSearchResults ? (
            <div className="empty-subtitle-wrapper">
              <Typography variant="body2" className="empty-subtitle">
                Não foi possível achar nenhum resultado para sua busca.
              </Typography>
              <Typography variant="body2" className="empty-subtitle">
                Tente refazer a pesquisa para encontrar o que busca.
              </Typography>
            </div>
          ) : (
            <Typography variant="body2" className="empty-subtitle">
              Clique em &apos;Cadastrar Usuário&apos; para começar a cadastrar.
            </Typography>
          )}
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
            {users.map((u: User) => (
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
        <Search placeholder="Pesquisa" onSearch={handleSearch} />
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

export default UserPage;
