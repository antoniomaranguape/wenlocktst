import { CheckCircle, CircleAlert, Info, TriangleAlert } from "lucide-react";
import { toast } from "react-toastify";

export const ToastTypeEnum = {
  Error: "error",
  Success: "success",
  Warning: "warning",
  Info: "info",
} as const;

type ToastTypeEnumType = (typeof ToastTypeEnum)[keyof typeof ToastTypeEnum];

export function showToast(type: ToastTypeEnumType, message: string) {
  const commonOptions = {
    icon: () => null,
    closeButton: false,
    toastId: `${type}-${message}`,
  };

  if (type === ToastTypeEnum.Error) {
    toast.error(
      <div style={styles.wrapper}>
        <CircleAlert size={22} color="#fff" />
        <span style={styles.text}>{message}</span>
      </div>,
      {
        ...commonOptions,
        style: {
          ...styles.toast,
          ...styles.errorToast,
          backgroundColor: "#830202",
        },
        hideProgressBar: true,
      }
    );
  }

  if (type === ToastTypeEnum.Success) {
    toast.success(
      <div style={styles.wrapper}>
        <CheckCircle size={22} color="#fff" />
        <span style={styles.text}>{message}</span>
      </div>,
      {
        ...commonOptions,
        style: {
          ...styles.toast,
          backgroundColor: "#388E3C",
        },
        hideProgressBar: true,
      }
    );
  }

  if (type === ToastTypeEnum.Warning) {
    toast.warn(
      <div style={styles.wrapper}>
        <TriangleAlert size={22} color="#fff" />
        <span style={styles.text}>{message}</span>
      </div>,
      {
        ...commonOptions,
        style: {
          ...styles.toast,
          backgroundColor: "#F5A623",
        },
        hideProgressBar: true,
      }
    );
  }

  if (type === ToastTypeEnum.Info) {
    toast.info(
      <div style={styles.wrapper}>
        <Info size={22} color="#fff" />
        <span style={styles.text}>{message}</span>
      </div>,
      {
        ...commonOptions,
        style: {
          ...styles.toast,
          backgroundColor: "#4A90E2",
        },
        hideProgressBar: true,
        autoClose: 5000,
      }
    );
  }
}

const styles: {
  wrapper: React.CSSProperties;
  toast: React.CSSProperties;
  errorToast: React.CSSProperties;
  text: React.CSSProperties;
} = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  toast: {
    color: "#fff",
    fontFamily: "Quicksand, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
    padding: "14px 20px",
    borderRadius: "8px",
    minWidth: "340px",
    maxWidth: "550px",
    lineHeight: "1.4",
  },
  errorToast: {
    width: "fit-content",
    maxWidth: "500px",
    lineHeight: "1.2",
  },
  text: {
    flex: 1,
    overflowWrap: "break-word",
    wordBreak: "break-word",
  },
};
