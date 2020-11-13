import React from "react";
import { toast, ToastContainer as ToastRaw } from "react-toastify";

export const ToastContainer = () => {
  return <ToastRaw />;
};

export const useToast = (text: string) => {
  return () => {
    toast(text);
  };
};
