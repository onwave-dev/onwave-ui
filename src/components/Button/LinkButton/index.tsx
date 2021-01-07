import React from "react";
import { UrlObject } from "url";
import { DynamicLink } from "../../DynamicLink";
import { BaseButton } from "../BaseButton";

export type LinkButtonProps = {
  className?: string;
  href: string | UrlObject;
  color?: string;
  backgroundColor?: string;
  size?: number;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  href,
  children,
  color,
  backgroundColor,
  size,
}) => {
  return (
    <div className={className}>
      <DynamicLink href={href}>
        <a>
          <BaseButton
            color={color}
            backgroundColor={backgroundColor}
            size={size}
          >
            {children}
          </BaseButton>
        </a>
      </DynamicLink>
    </div>
  );
};
