import styled from "@emotion/styled";
import React from "react";

type Props = {
  color?: string;
  backgroundColor?: string;
  size?: number;
  onClick?: () => void;
};

export const BaseButton: React.FC<Props> = ({
  children,
  backgroundColor,
  color,
  size,
  onClick,
}) => {
  return (
    <Content
      backgroundColor={backgroundColor}
      textColor={color}
      size={size}
      onClick={onClick}
    >
      {children}
    </Content>
  );
};

const Content = styled.div<{
  backgroundColor?: string;
  textColor?: string;
  size?: number;
}>`
  display: inline-block;
  padding: 12px 24px 12px 24px;
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#ff4545"};
  color: ${({ textColor }) => textColor ?? "white"};
  font-size: ${({ size }) => size ?? "36"}px;
  cursor: pointer;
`;
