import Link from "next/link";
import React from "react";
import { UrlObject } from "url";
import { BaseButton } from "../BaseButton";

export type NextButtonProps = {
  className?: string;
  href: string | UrlObject;
  color?: string;
  backgroundColor?: string;
  size?: number;
};

export const NextButton: React.FC<NextButtonProps> = ({
  className,
  href,
  children,
  color,
  backgroundColor,
  size,
}) => {
  return (
    <div className={className}>
      <Link href={href}>
        <a>
          <BaseButton
            color={color}
            backgroundColor={backgroundColor}
            size={size}
          >
            {children}
          </BaseButton>
        </a>
      </Link>
    </div>
  );
};
