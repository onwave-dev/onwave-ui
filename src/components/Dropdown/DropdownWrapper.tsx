import styled from "@emotion/styled";
import React from "react";

type Props = {};

export const DropdownWrapper: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
`;
