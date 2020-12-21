import { css } from "@emotion/core";
import { typographyCSS } from "../core";

export const globalTypographyCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  h1 {
    ${typographyCSS.display3};
  }
  h2 {
    ${typographyCSS.heading1};
  }
  h3 {
    ${typographyCSS.heading2};
  }
  h4 {
    ${typographyCSS.heading3};
  }
  h5 {
    ${typographyCSS.subtitle1};
  }
  h6 {
    ${typographyCSS.subtitle2};
  }
  p {
    ${typographyCSS.body1};
  }
`;
