import { Line } from "rc-progress";
import React from "react";

type Props = {
  percent: number;
};
export const ProgressBar: React.FC<Props> = ({ percent }) => {
  return <Line percent={percent} strokeWidth={4} strokeColor="#ff6565" />;
};
