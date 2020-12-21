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

export function buildMediaQuery(
  { minWidth, maxWidth }: { minWidth?: number; maxWidth?: number },
  not?: boolean
): string {
  let query = "@media ";

  if (minWidth) {
    query += `(min-width: ${minWidth}px)`;
  }

  if (minWidth && maxWidth) {
    query += " and ";
  }

  if (maxWidth) {
    query += `(max-width: ${maxWidth}px)`;
  }

  if (not) {
    query = `not all and ${query}`;
  }

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
