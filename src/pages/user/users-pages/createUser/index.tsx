import UserForm from "../../../../components/UserForm";
import type { UserFormData } from "../../../../schemas/userSchema";
import { useCreateUser } from "../../../../hooks/useCreateUser";

const CreateUser = () => {
  const { createUser, isLoading } = useCreateUser();

  const handleSubmit = (data: UserFormData) => {
    const { confirmPassword, ...userData } = data;
    createUser(userData);
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <UserForm
      title="Cadastro de Usuário"
      submitButtonText="Cadastrar"
      isLoading={isLoading}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      backHref="/user"
    />
  );
};

export default CreateUser;
