import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { UserService } from "../services/user-service";
import { handleError } from "../utils/Error";
import { showToast, ToastTypeEnum } from "../utils/showToast";

export const useDeleteUser = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutate, isError, error } = useMutation({
    mutationFn: (userId: string) => UserService.deleteUser(userId),
    onSuccess: () => {
      showToast(ToastTypeEnum.Success, "Exclusão Realizada!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      closeDeleteModal();
    },
    onError: (err) => {
      handleError(err);
    },
  });

  const openDeleteModal = (userId: string) => {
    setUserToDelete(userId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const confirmDelete = () => {
    if (userToDelete) mutate(userToDelete);
  };

  return {
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDelete,
    isError,
    error,
  };
};
