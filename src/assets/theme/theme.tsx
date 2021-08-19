import { createGlobalStyle } from "styled-components";

export const theme = {
  darkGrey: `#303030`,
  darkGrey1: `#393939`,
  darkGrey2: `#616161`,
  grey: `#707070`,
  lightGrey: `#9C9C9C`,
  lightestGrey: `#D1D1D1`,
  lightestGrey1: `#F6F6F6`,
  white: "#FFFFFF",
  lightBlue: "#F5FBFF",
  darkRed: `#C60E2E`,
  red: `#E4163A`,
  lightRed: `#FF5761`,
  lightestRed: `#FF768E`,
  blue: `#344472`,
};

export const size = {
  xs: "375px",
  ssm: "513px",
  sm: "576px",
  md: "768px",
  slg: "900px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};
export const maxW = {
  xs: `(max-width: ${size.xs})`,
  ssm: `(max-width: ${size.ssm})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  slg: `(max-width: ${size.slg})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};

export const sizeMin = {
  xs: "375px",
  ssm: "513px",
  sm: "576px",
  md: "769px",
  slg: "900px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};
export const minW = {
  xs: `(mix-width: ${sizeMin.xs})`,
  ssm: `(mix-width: ${sizeMin.ssm})`,
  sm: `(mix-width: ${sizeMin.sm})`,
  md: `(mix-width: ${sizeMin.md})`,
  slg: `(mix-width: ${sizeMin.slg})`,
  lg: `(mix-width: ${sizeMin.lg})`,
  xl: `(mix-width: ${sizeMin.xl})`,
  xxl: `(mix-width: ${sizeMin.xxl})`,
};

export const Theme = createGlobalStyle`
  body {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    background: ${theme.white};
    font-family: "Avenir", sans-serif;
    box-sizing: border-box;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
