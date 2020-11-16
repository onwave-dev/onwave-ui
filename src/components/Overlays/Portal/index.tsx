import { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDom } from "../../../utils/useDom";

type Props = {
  container?: HTMLElement;
};

export const Portal: React.FC<Props> = ({ children, container }) => {
  const tempElement: HTMLDivElement = document.createElement("div");
  const canUseDom = useDom();
  tempElement.className = "portal";
  useEffect(() => {
    if (!container && canUseDom) {
      document.body.appendChild(tempElement);
    }
    return () => {
      if (!container && canUseDom) {
        document.body.removeChild(tempElement);
      }
    };
  }, [canUseDom]);

  return ReactDOM.createPortal(children, container ?? tempElement);
};
