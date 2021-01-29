import styled from "@emotion/styled";
import React from "react";

type Props = {
  maxWidth?: number;
};
export const MaxWidthContainer: React.FC<Props> = ({ children, maxWidth }) => {
  return <Container maxWidth={maxWidth}>{children}</Container>;
};

const Container = styled.div<{ maxWidth?: number }>`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "1024px")};
`;
