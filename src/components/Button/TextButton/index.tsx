import styled from "@emotion/styled";
import React from "react";

export type TextButtonProps = {};

export const TextButton: React.FC<TextButtonProps> = ({ children }) => {
  return <Hello>{children}</Hello>;
};

const Hello = styled.div``;
