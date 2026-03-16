import { useNavigate, useParams } from "react-router-dom";
import { Box, CircularProgress, Alert, Button } from "@mui/material";
import UserForm from "../../../../components/UserForm";
import { useEditUser } from "../../../../hooks/useEditUser";
import type { UserFormData } from "../../../../schemas/userSchema";

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, updateUser, isLoading, isError, error } = useEditUser(id);

  const handleSubmit = (data: UserFormData) => {
    const { confirmPassword, ...updateData } = data;
    const dataToUpdate = updateData.password
      ? { name: updateData.name, email: updateData.email, matricula: updateData.matricula, password: updateData.password }
      : { name: updateData.name, email: updateData.email, matricula: updateData.matricula };

    updateUser(dataToUpdate);
  };

  const handleCancel = () => {
    navigate("/user");
  };

  if (isLoading && !user) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 200 }}>
        <CircularProgress size={40} />
      </Box>
    );
  }

  if (isError || (!isLoading && id && !user)) {
    return (
      <Box sx={{ p: 2 }}>
        <Alert severity="error">
          {isError && error instanceof Error
            ? error.message
            : !user && id
              ? "Usuário não encontrado."
              : "Erro ao carregar dados do usuário"}
        </Alert>
        <Button
          variant="outlined"
          onClick={() => navigate("/user")}
          sx={{ mt: 2 }}
        >
          Voltar para lista de usuários
        </Button>
      </Box>
    );
  }

  const defaultValues = user
    ? {
        name: user.name,
        email: user.email,
        matricula: user.matricula,
        password: "",
        confirmPassword: "",
      }
    : undefined;

  return (
    <UserForm
      defaultValues={defaultValues}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      title="Editar Usuário"
      submitButtonText="Salvar"
      backHref="/user"
    />
  );
};

export default EditUser;
