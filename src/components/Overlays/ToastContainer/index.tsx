import styled from "@emotion/styled";
import React, {
  RefObject,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { Portal } from "../Portal";
import { Toast, ToastProps } from "../Toast/Toast";

export type ToastData = ToastProps & { key: string };

type Props = {
  addToast: RefObject<(toast: ToastProps) => string>;
  removeToast: RefObject<(key: string) => void>;
  container: HTMLElement;
};
export const ToastContainer: React.FC<Props> = ({
  addToast,
  removeToast,
  container,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const add = useCallback((toast: ToastProps) => {
    const key =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setToasts((prev) => [...prev, { ...toast, key }]);
    return key;
  }, []);

  const remove = useCallback((key: string) => {
    setToasts((prev) => [...prev.filter((toast) => toast.key !== key)]);
  }, []);

  useImperativeHandle(addToast, () => add);
  useImperativeHandle(removeToast, () => remove);

  return (
    <Portal container={container}>
      <ToasterContainer>
        <TopToastsContainer>
          {toasts
            .map((toast) => {
              const dismiss = () => {
                remove(toast.key);
              };
              return <Toast {...toast} dismiss={dismiss} />;
            })
            .reverse()}
        </TopToastsContainer>
      </ToasterContainer>
    </Portal>
  );
};

const ToasterContainer = styled.div``;

const TopToastsContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  width: auto;
  transform: translateX(-50%);
  z-index: 10000;
`;
