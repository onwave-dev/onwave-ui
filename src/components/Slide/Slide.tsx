import styled from "@emotion/styled";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Slide = React.memo<Props>(({ children, className }) => (
  <Container className={`${className} oui-slide`}>{children}</Container>
));

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 100%;
`;
