import { ToastData } from "../ToastContainer";
import { toaster } from "../Toaster";

export const useToast = (toastData: ToastData) => {
  const show = () => {
    return toaster?.addToast(toastData);
  };

  const dismiss = () => {
    toaster?.removeToast(toastData.key);
  };

  return { show, dismiss };
};
