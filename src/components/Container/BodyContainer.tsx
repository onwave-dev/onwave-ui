import styled from "@emotion/styled";
import React from "react";

export const BodyContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  margin-top: 66px;
`;
