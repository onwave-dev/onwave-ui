import { useEffect } from "react";
import ReactDOM from "react-dom";

type Props = {
  container?: HTMLElement;
};

export const Portal: React.FC<Props> = ({ children, container }) => {
  const tempElement: HTMLDivElement = document.createElement("div");
  tempElement.className = "portal";
  useEffect(() => {
    if (!container) {
      document.body.appendChild(tempElement);
    }
    return () => {
      if (!container) {
        document.body.removeChild(tempElement);
      }
    };
  }, []);

  return ReactDOM.createPortal(children, container ?? tempElement);
};
