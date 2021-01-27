import styled from "@emotion/styled";
import React from "react";

type Props = {
  maxWidth?: number;
};
export const MaxWidthContainer: React.FC<Props> = ({ children, maxWidth }) => {
  return (
    <Wrapper>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div<{ maxWidth?: number }>`
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "1024px")};
`;
