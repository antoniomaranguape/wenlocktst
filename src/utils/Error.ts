import type { AxiosError } from "axios";
import { showToast, ToastTypeEnum } from "./showToast";

export interface ErrorResponse {
  message: string | string[];
}

export const handleError = (error: unknown) => {
  const axiosErr = error as AxiosError<ErrorResponse>;
  let errorMessage = "Erro no servidor";

  if (axiosErr?.response?.data?.message) {
    const msg = axiosErr.response.data.message;
    errorMessage = Array.isArray(msg) ? msg.join("\n") : msg;
  }

  console.error("Detalhes do erro:", axiosErr?.response ?? error);
  showToast(ToastTypeEnum.Error, errorMessage);
};
