import { Line } from "rc-progress";
import React from "react";

type Props = {
  percent: number;
  strokeColor?: string;
};
export const ProgressBar: React.FC<Props> = ({ percent, strokeColor }) => {
  return (
    <Line
      percent={percent}
      strokeWidth={1}
      strokeColor={strokeColor ?? "#FE8C6A"}
    />
  );
};
