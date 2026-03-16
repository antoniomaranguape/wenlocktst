import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/user-service";
import type { UserFormData } from "../schemas/userSchema";
import { showToast, ToastTypeEnum } from "../utils/showToast/showToast";

export const useCreateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate,
    isPending: isLoading,
    isError,
    error,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: (data: UserFormData) =>
      UserService.createUser({
        name: data.name,
        email: data.email,
        matricula: data.matricula ?? "",
        password: data.password,
      }),
    onSuccess: () => {
      showToast(ToastTypeEnum.Success, "Usuário cadastrado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/user");
    },
    onError: () => {
      showToast(ToastTypeEnum.Error, "Erro ao cadastrar usuário.");
    },
  });

  const createUser = (data: UserFormData) => {
    mutate(data);
  };

  return {
    createUser,
    isLoading,
    isError,
    error,
    isSuccess,
    reset,
  };
};

