import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Portal } from "../Portal";

export const Toast = () => {
  return (
    <Portal>
      <ToastContainer />
    </Portal>
  );
};

export const useToast = (text: string) => {
  return () => {
    toast(text);
  };
};
