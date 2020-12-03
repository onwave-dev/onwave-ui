import styled from "@emotion/styled";
import React, { ReactElement, useState } from "react";

export type BottomSheetProps = {
  title: string;
  renderContent: ReactElement;
};
export const BottomSheet: React.FC<BottomSheetProps> = ({
  title,
  renderContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container isOpen={isOpen}>
      <Header isOpen={isOpen} onClick={handleToggle}>
        <Title>{title}</Title>
      </Header>
      <Content>{renderContent}</Content>
    </Container>
  );
};
const Container = styled.div<{ isOpen: boolean }>`
  z-index: 2001;
  position: fixed;
  width: 100vw;
  height: 90vh;
  bottom: calc(48px - 100%);
  left: 0;
  overflow: visible;
  transition: transform 0.4s ease-in-out;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: white;
  box-shadow: 0 -1px 3px -1px rgba(41, 42, 43, 0.16),
    0 0 1px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  ${({ isOpen }) =>
    isOpen
      ? "transform: translateY(calc(48px - 100% + 1px));"
      : "transform: translateY(calc(-10% - 2px))"};
`;

const Header = styled.div<{ isOpen: boolean }>`
  padding: 10px 24px;
  cursor: pointer;
  transition: padding 0.4s ease-in-out;
  ${({ isOpen }) => (isOpen ? "padding-top: 24px;" : undefined)};
`;

const Title = styled.h2`
  margin: 0px;
`;

const Content = styled.div`
  width: 100%;
  height: calc((100% - 122px) - 4px);
  padding: 0px 24px;
`;
