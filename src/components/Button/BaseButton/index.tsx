import React from "react";
import styled from "@emotion/styled";

type Props = {
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
};

export const BaseButton: React.FC<Props> = ({
  children,
  backgroundColor,
  color,
  fontSize,
}) => {
  return (
    <Content
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
    >
      {children}
    </Content>
  );
};

const Content = styled.div<{
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
}>`
  display: inline-block;
  padding: 12px 40px 12px 40px;
  border-radius: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#ff4545"};
  color: ${({ color }) => color ?? "white"};
  font-szie: ${({ fontSize }) => fontSize ?? "36px"};
  cursor: pointer;
`;
