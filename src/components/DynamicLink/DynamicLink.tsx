import NextLink, { LinkProps } from "next/link";
import React from "react";
import { useLinkContext } from "../../contexts/LinkContext";

type Props = {
  outLink?: boolean;
} & (
  | LinkProps
  | React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
);
export const DynamicLink: React.FC<Props> = ({ href, outLink, children }) => {
  const { type } = useLinkContext();

  if (!outLink && type === "Next" && href) {
    return <NextLink href={href}>{children}</NextLink>;
  }
  return <a href={href?.toString()}>{children}</a>;
};
