import { Line } from "rc-progress";
import React from "react";

type Props = {
  percent: number;
};
export const ProgressBar: React.FC<Props> = ({ percent }) => {
  return <Line percent={percent} strokeWidth={6} strokeColor="#FE8C6A" />;
};
