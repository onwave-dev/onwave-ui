import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";

const queryToCSS = (query: string) => (
  template: TemplateStringsArray,
  ...array: Array<CSSInterpolation>
) => {
  return css`
    ${query} {
      ${css(template, ...array)};
    }
  `;
};

export function buildMediaQuery({
  maxWidth,
}: {
  minWidth?: number;
  maxWidth?: number;
}): string {
  const query = `@media only screen and (max-width: ${maxWidth}px)`;
  return query;
}

export const SIZES = {
  sm: { maxWidth: 480 },
  md: { maxWidth: 768 },
  lg: { maxWidth: 1024 },
  xl: { maxWidth: 1200 },
};

export const media = {
  sm: queryToCSS(buildMediaQuery(SIZES.sm)),
  md: queryToCSS(buildMediaQuery(SIZES.md)),
  lg: queryToCSS(buildMediaQuery(SIZES.lg)),
  xl: queryToCSS(buildMediaQuery(SIZES.xl)),
};
