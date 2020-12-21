import { css, ObjectInterpolation, SerializedStyles } from "@emotion/core";

export type Typography =
  | "display2"
  | "display3"
  | "heading1"
  | "heading2"
  | "heading3"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption1"
  | "caption2";

export const typography: {
  [key in Typography]: Required<
    Pick<
      ObjectInterpolation<undefined>,
      "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing"
    >
  >;
} = {
  display2: {
    fontSize: "6rem",
    fontWeight: "normal",
    lineHeight: "6.75rem",
    letterSpacing: -1,
  },
  display3: {
    fontSize: "4.5rem",
    fontWeight: "normal",
    lineHeight: "5.375rem",
    letterSpacing: -0.5,
  },
  heading1: {
    fontSize: "3rem",
    fontWeight: "bold",
    lineHeight: "3.5rem",
    letterSpacing: 0,
  },
  heading2: {
    fontSize: "2rem",
    fontWeight: "bold",
    lineHeight: "2.5rem",
    letterSpacing: 0,
  },
  heading3: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "2rem",
    letterSpacing: 0,
  },
  subtitle1: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    lineHeight: "1.75rem",
    letterSpacing: 0,
  },
  subtitle2: {
    fontSize: "1.125rem",
    fontWeight: "bold",
    lineHeight: "1.5rem",
    letterSpacing: -0.45,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "1.5rem",
    letterSpacing: -0.3,
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: "normal",
    lineHeight: "1.25rem",
    letterSpacing: -0.15,
  },
  caption1: {
    fontSize: "0.6875rem",
    fontWeight: "normal",
    lineHeight: "1rem",
    letterSpacing: 0,
  },
  caption2: {
    fontSize: "0.5625rem",
    fontWeight: "normal",
    lineHeight: "0.75rem",
    letterSpacing: 0,
  },
};

export const typographyCSS = Object.entries(typography).reduce(
  (acc, [key, value]) => ({ ...acc, [key]: css(value) }),
  {}
) as { [key in Typography]: SerializedStyles };
