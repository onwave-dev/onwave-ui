import React from "react";
import ReactDOM from "react-dom";
import { useDom } from "../../../utils";
import { ToastContainer, ToastData } from "../ToastContainer";

export const Toaster = () => {
  const addToast = React.createRef<(toast: ToastData) => string>();
  const removeToast = React.createRef<(key: string) => void>();
  const canUseDom = useDom();
  if (canUseDom) {
    const containerElement = document.createElement("div");
    containerElement.className = "onwave-ui-toast-container";
    document.body.appendChild(containerElement);

    ReactDOM.render(
      <ToastContainer
        addToast={addToast}
        removeToast={removeToast}
        container={containerElement}
      />,
      containerElement
    );
  }

  if (!addToast.current || !removeToast.current) {
    return;
  }
  return { addToast: addToast.current, removeToast: removeToast.current };
};

export const toaster = Toaster();
