import styled from "@emotion/styled";
import React, { useState } from "react";
import { BreakPoints } from "../../../utils/mediaQuery";
import { useDom } from "../../../utils/useDom";
import { OverlaidPortal } from "../OverlaidPortal";

export type ModalBottomSheetProps = {
  opener?: React.ReactElement<{ onClick: () => void }>;
  className?: string;
  onClose?: () => void;
  title: string;
};

export const ModalBottomSheet: React.FC<ModalBottomSheetProps> = ({
  children,
  className,
  onClose,
  opener,
  title,
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
      <StyledOverlaidPortal isOpen={isOpen} onClose={handleCloseModal}>
        <Dialog
          isOpen={isOpen}
          className={className}
          onClick={blockPropagation}
        >
          <DialogHead>
            <DialogTitle>{title}</DialogTitle>
          </DialogHead>
          <DialogBody>{children}</DialogBody>
        </Dialog>
      </StyledOverlaidPortal>
    </>
  );
};
const StyledOverlaidPortal = styled(OverlaidPortal)<{ isOpen: boolean }>`
  transition: ${({ isOpen }) => !isOpen && `visibility 0s linear 225ms,`}
    opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  ${BreakPoints.sm`
    justify-content: flex-end;
  `};
`;

const Dialog = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 480px;
  max-height: 800px;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
  ${BreakPoints.sm`
    flex: none;
    padding: 24px;
    padding-bottom: calc(env(safe-area-inset-bottom) + 24px);
    width: 100%;
    max-height: calc(100% - 48px);
    height: auto;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 225ms ease-out;
  `};
  ${({ isOpen }) =>
    !isOpen &&
    BreakPoints.sm`
      transform: translateY(100%);
  `}
`;

const DialogHead = styled.div`
  flex: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

const DialogTitle = styled.h2`
  flex: auto;
  white-space: pre-line;
  word-break: break-all;
`;

const DialogBody = styled.div`
  flex: auto;
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-all;
  overscroll-behavior: contain;
  &::-webkit-scrollbar {
    display: none;
  }
`;
