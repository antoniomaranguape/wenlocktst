import UserForm from "../../../../components/UserForm";
import type { UserFormData } from "../../../../schemas/userSchema";
import { useCreateUser } from "../../../../hooks/useCreateUser";

const CreateUser = () => {
  const { createUser, isLoading } = useCreateUser();

  const handleSubmit = async (data: UserFormData) => {
    createUser(data);
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <UserForm
      title="Cadastrar Usuário"
      submitButtonText="Salvar"
      isLoading={isLoading}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      backHref="/user"
    />
  );
};

export default CreateUser;
