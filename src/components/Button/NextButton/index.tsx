import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
import { BaseButton } from "../BaseButton";

export type NextButtonProps = {
  className?: string;
  href: string | UrlObject;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
};

export const NextButton: React.FC<NextButtonProps> = ({
  className,
  href,
  children,
  color,
  backgroundColor,
  fontSize,
}) => {
  return (
    <div className={className}>
      <Link href={href}>
        <a>
          <BaseButton
            color={color}
            backgroundColor={backgroundColor}
            fontSize={fontSize}
          >
            {children}
          </BaseButton>
        </a>
      </Link>
    </div>
  );
};
