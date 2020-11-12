import React, { useEffect } from "react";
import { Portal } from "..";
import { useDom } from "../../../utils/useDom";
import styled from "@emotion/styled";

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
  zIndex?: number;
  overlayColor?: string;
};

export const OverlaidPortal: React.FC<Props> = ({
  isOpen,
  className,
  zIndex,
  children,
  overlayColor,
  onClose,
}) => {
  const canUseDom = useDom();
  useEffect(() => {
    if (canUseDom) {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
    return () => {
      if (canUseDom) {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  return (
    <Portal container={document.body}>
      <Overlay
        className={className}
        overlayColor={overlayColor}
        zIndex={zIndex}
        visible={isOpen}
        onClick={onClose ?? undefined}
      >
        {children}
      </Overlay>
    </Portal>
  );
};

export const Overlay = styled.div<{
  zIndex?: number;
  overlayColor?: string;
  visible: boolean;
}>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: ${(props) => props.zIndex};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: ${(props) => props.overlayColor ?? "transparent"};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  overscroll-behavior: contain;
`;
