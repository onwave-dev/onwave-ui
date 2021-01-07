import styled from "@emotion/styled";
import { NextPage } from "next";
import React from "react";
import { DynamicLink } from "../DynamicLink";

interface Props {
  as?: "a" | "button";
  href?: string;
  onClick?: () => void;
}

export const DropdownItem: NextPage<Props> = ({
  as,
  href,
  children,
  onClick,
}) => {
  if (href) {
    return (
      <DynamicLink href={href} passHref>
        <Wrapper as={as}>{children}</Wrapper>
      </DynamicLink>
    );
  } else {
    return (
      <Wrapper as={as} onClick={onClick}>
        {children}
      </Wrapper>
    );
  }
};

DropdownItem.defaultProps = { as: "a" };

const Wrapper = styled.a`
  display: block;
  background: transparent;
  border: 0;
  width: 100%;
  padding: 6px 20px;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: #edf2f7;
  }
  &:first-of-type {
    margin-top: 8px;
  }
  &:last-of-type {
    margin-bottom: 8px;
  }
`;
