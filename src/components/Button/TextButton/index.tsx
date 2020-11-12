import React from "react";
import { BaseButton } from "../BaseButton";

export type TextButtonProps = {};

export const TextButton: React.FC<TextButtonProps> = ({ children }) => {
  return <BaseButton>{children}</BaseButton>;
};
