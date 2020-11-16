import styled from "@emotion/styled";
import React from "react";
import { BreakPoints } from "../../../utils/mediaQuery";

type Props = {
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  onClick?: () => void;
};

export const BaseButton: React.FC<Props> = ({
  children,
  backgroundColor,
  color,
  fontSize,
  onClick,
}) => {
  return (
    <Content
      backgroundColor={backgroundColor}
      textColor={color}
      size={fontSize}
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
  padding: 12px 36px 12px 36px;
  border-radius: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#ff4545"};
  color: ${({ textColor }) => textColor ?? "white"};
  font-size: ${({ size }) => size ?? "36"}px;
  cursor: pointer;
  ${BreakPoints.sm`
    padding: 12px 24px 12px 24px;
  `}
`;
