import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { UserService } from "../../../../services/user-service";
import UserDetailsDrawer from "../../../../components/UserDetailsDrawer";

const ViewUser = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => (id ? UserService.getUserById(id) : null),
    enabled: !!id,
  });

  const handleClose = () => {
    setIsOpen(false);
    navigate(-1);
  };

  return (
    <UserDetailsDrawer
      isOpen={isOpen}
      onClose={handleClose}
      user={user ?? null}
      isLoading={isLoading}
      isError={!!isError}
      error={(error as Error) ?? null}
    />
  );
};

export default ViewUser;

