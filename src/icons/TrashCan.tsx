import React, { SVGProps } from "react";

export const TrashCan: React.FC<SVGProps<SVGSVGElement>> = ({
  width,
  height,
  fill,
}) => {
  return (
    <svg
      width={width ?? 24}
      height={height ?? 24}
      fill={fill}
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M6 19V7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM19 4v2H5V4h3.5l1-1h5l1 1H19z"></path>
    </svg>
  );
};
