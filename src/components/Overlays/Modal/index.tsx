import styled from "@emotion/styled";
import React, { useState } from "react";
import { useDom } from "../../../utils/useDom";
import { OverlaidPortal } from "../OverlaidPortal";

type Props = {
  opener?: React.ReactElement<{ onClick: () => void }>;
  className?: string;
  onClose?: () => void;
};
export const Modal: React.FC<Props> = ({
  children,
  className,
  onClose,
  opener,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const canUseDom = useDom();

  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const blockPropagation = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };
  const handleCloseModal = () => {
    if (opener) {
      hideModal();
    }
    onClose ? onClose() : hideModal();
  };

  if (!canUseDom) {
    return opener ?? <React.Fragment />;
  }
  const clonedOpener =
    opener &&
    React.cloneElement(opener, {
      onClick: showModal,
    });

  return (
    <>
      {clonedOpener}
      <OverlaidPortal isOpen={isOpen} onClose={handleCloseModal}>
        <Dialog className={className} onClick={blockPropagation}>
          {children}
        </Dialog>
      </OverlaidPortal>
    </>
  );
};

const Dialog = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 5px, rgba(0, 0, 0, 0.02) 0px 6px 4px,
    rgba(0, 0, 0, 0.03) 0px 9px 6px, rgba(0, 0, 0, 0.03) 0px 16px 12px,
    rgba(0, 0, 0, 0.08) 0px 24px 24px;
  border-radius: 8px;
  max-width: 1280px;
  background-color: #fff;
  padding: 32px;
`;
