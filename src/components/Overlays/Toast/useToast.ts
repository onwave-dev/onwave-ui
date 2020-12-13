import { toaster } from "../Toaster";
import { ToastProps } from "./Toast";

export const useToast = (initial?: ToastProps) => {
  const show = (message: string) => {
    return toaster?.addToast({ ...initial, message });
  };

  const dismiss = (key: string) => {
    toaster?.removeToast(key);
  };

  return { show, dismiss };
};
