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
  return (option?: ToastOptions, content?: string) => {
    const message = content ?? text;
    const options = { autoClose: 3500, ...option };

    if (type) {
      toast[type](message, options);
      return;
    }
    toast(message, options);
  };
};
