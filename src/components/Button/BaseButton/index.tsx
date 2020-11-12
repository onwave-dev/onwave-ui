import React from "react";
import styled from "@emotion/styled";

type Props = {
  color?: string;
  backgroundColor?: string;
};

export const BaseButton: React.FC<Props> = ({
  children,
  backgroundColor,
  color,
}) => {
  return (
    <Content backgroundColor={backgroundColor} color={color}>
      {children}
    </Content>
  );
};

const Content = styled.div<{ backgroundColor?: string; color?: string }>`
  display: inline-block;
  padding: 12px 40px 12px 40px;
  border-radius: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#ff4545"};
  color: ${({ color }) => color ?? "white"};
  cursor: pointer;
`;
