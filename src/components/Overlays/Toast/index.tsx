import React from "react";
import { toast, ToastContainer as ToastRaw } from "react-toastify";

export const ToastContainer = () => {
  return <ToastRaw />;
};

export const useToast = (
  text?: string,
  type?: "success" | "info" | "error" | "warning" | "dark"
) => {
  return (content?: string) => {
    const message = text ?? content;

    if (type) {
      toast[type](message);
      return;
    }
    toast(message);
  };
};
