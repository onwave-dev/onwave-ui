import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
import BaseButton from "../BaseButton";

export type NextButtonProps = {
  href: string | UrlObject;
  color?: string;
  backgroundColor?: string;
};

export const NextButton: NextPage<NextButtonProps> = ({
  href,
  children,
  color,
  backgroundColor,
}) => {
  return (
    <Link href={href}>
      <a>
        <BaseButton color={color} backgroundColor={backgroundColor}>
          {children}
        </BaseButton>
      </a>
    </Link>
  );
};
