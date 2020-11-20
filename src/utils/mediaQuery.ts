import { css } from "@emotion/react";
import { CSSInterpolation } from "@emotion/serialize";
export class BreakPoints {
  static lg(template: TemplateStringsArray, ...array: Array<CSSInterpolation>) {
    return css`
      @media only screen and (max-width: 1024px) {
        ${css(template, ...array)};
      }
    `;
  }
  static md(template: TemplateStringsArray, ...array: Array<CSSInterpolation>) {
    return css`
      @media only screen and (max-width: 768px) {
        ${css(template, ...array)};
      }
    `;
  }
  static sm(template: TemplateStringsArray, ...array: Array<CSSInterpolation>) {
    return css`
      @media only screen and (max-width: 481px) {
        ${css(template, ...array)};
      }
    `;
  }
}
export type BreakPointSize = {
  lg?: number;
  md?: number;
  sm?: number;
};

export const getTypoBreakPoints = (lg?: number, md?: number, sm?: number) => {
  return `
  ${BreakPoints.lg`
    font-size: ${lg}px;
  `}
  ${BreakPoints.md`
    font-size: ${md}px;
  `}
  ${BreakPoints.sm`
    font-size: ${sm}px;
  `}
  `;
};
