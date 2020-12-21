import { css } from "@emotion/core";
import { Global } from "@emotion/react";
import React from "react";
import { zeroCSS } from "../../styles/zeroCSS";

export const globalStyle = css`
  ${zeroCSS};
`;

export const GlbalStyle = <Global styles={globalStyle} />;
