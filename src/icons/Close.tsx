import React, { SVGProps } from "react";

export const Close: React.FC<SVGProps<SVGSVGElement>> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
