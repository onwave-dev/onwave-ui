import styled from "@emotion/styled";
import React, { forwardRef } from "react";

type Props = {
  isOpen: boolean;
  position?: "left" | "right";
};

export const DropdownMenu = forwardRef<HTMLDivElement, Props>(
  ({ isOpen, children, position }, ref) => {
    return isOpen ? (
      <Wrapper ref={ref} position={position}>
        {children}
      </Wrapper>
    ) : (
      <></>
    );
  }
);

const Wrapper = styled.div<{ position?: "left" | "right" }>`
  position: absolute;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff;
  margin-top: 4px;
  min-width: 180px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  z-index: 150;
  ${({ position }) => position === "right" && `right: 0;`}
`;
