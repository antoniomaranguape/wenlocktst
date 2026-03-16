import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/user-service";
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
    mutationFn: (userData: { name: string; email: string; matricula: string; password: string }) =>
      UserService.createUser(userData),
    onSuccess: () => {
      showToast(ToastTypeEnum.Success, "Usuário cadastrado com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/user");
    },
    onError: () => {
      showToast(ToastTypeEnum.Error, "Erro ao cadastrar usuário.");
    },
  });

  const createUser = (userData: { name: string; email: string; matricula: string; password: string }) => {
    mutate(userData);
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

