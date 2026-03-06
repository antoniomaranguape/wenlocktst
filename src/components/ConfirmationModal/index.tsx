import type React from "react";
import {
  StyledDialog,
  StyledDialogContent,
  ModalTitle,
  ModalMessage,
  ModalActions,
  CancelButton,
  ConfirmButton,
} from "./styles";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Sim",
  cancelText = "Não",
}) => {
  return (
    <StyledDialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <StyledDialogContent>
        <ModalTitle variant="h6">{title}</ModalTitle>
        <ModalMessage variant="body1">{message}</ModalMessage>
        <ModalActions>
          <CancelButton variant="outlined" onClick={onClose}>
            {cancelText}
          </CancelButton>
          <ConfirmButton variant="contained" onClick={onConfirm}>
            {confirmText}
          </ConfirmButton>
        </ModalActions>
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default ConfirmationModal;
