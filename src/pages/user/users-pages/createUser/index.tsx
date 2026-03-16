import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserForm from "../../../../components/UserForm";
import { UserService } from "../../../../services/user-service";
import type { UserFormData } from "../../../../schemas/userSchema";

const CreateUser = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: UserFormData) => {
    setIsLoading(true);
    try {
      await UserService.createUser({
        name: data.name,
        email: data.email,
        matricula: data.matricula ?? "",
        password: data.password,
      });
      navigate("/user");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/user");
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
