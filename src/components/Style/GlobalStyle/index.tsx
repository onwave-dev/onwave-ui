import { Global } from "@emotion/react";
import React from "react";
import { globalCSS } from "./GlobalCSS";

export const GlobalStyle = () => {
  return <Global styles={globalCSS} />;
};
