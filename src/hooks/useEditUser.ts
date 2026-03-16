import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { UserService } from "../services/user-service";
import { showToast, ToastTypeEnum } from "../utils/showToast/showToast";
import { handleError } from "../utils/Error";
import type { UpdateUserData } from "../types/user.interface";

export const useEditUser = (userId: string | undefined) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorFetching,
    error: fetchError,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => (userId ? UserService.getUserById(userId) : Promise.resolve(null)),
    enabled: !!userId,
  });

  const {
    mutate,
    isPending: isUpdating,
    isError: isErrorUpdating,
    error: updateError,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: (userData: UpdateUserData) => {
      if (!userId) throw new Error("ID do usuário não fornecido");
      return UserService.updateUser(userId, userData);
    },
    onSuccess: () => {
      showToast(ToastTypeEnum.Success, "Dados salvos com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user", userId] });
      navigate("/user");
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const updateUser = (userData: UpdateUserData) => {
    mutate(userData);
  };

  const isError = isErrorFetching || isErrorUpdating;
  const error = fetchError || updateError;
  const isLoading = isLoadingUser || isUpdating;

  return {
    user: user ?? undefined,
    updateUser,
    isLoading,
    isError,
    error,
    isSuccess,
    reset,
  };
};
