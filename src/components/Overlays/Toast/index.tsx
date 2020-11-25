import React from "react";
import {
  toast,
  ToastContainer as ToastRaw,
  ToastOptions,
} from "react-toastify";

export const ToastContainer = () => {
  return <ToastRaw />;
};

export const useToast = (
  text?: string,
  type?: "success" | "info" | "error" | "warning" | "dark"
) => {
  return (content?: string, option?: ToastOptions) => {
    const message = text ?? content;
    const options = { autoClose: 3500, ...option };

    if (type) {
      toast[type](message, options);
      return;
    }
    toast(message, options);
  };
};
