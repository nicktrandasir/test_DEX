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
  xs: `max-width: ${size.xs}`,
  ssm: `max-width: ${size.ssm}`,
  sm: `max-width: ${size.sm}`,
  md: `max-width: ${size.md}`,
  slg: `max-width: ${size.slg}`,
  lg: `max-width: ${size.lg}`,
  xl: `max-width: ${size.xl}`,
  xxl: `max-width: ${size.xxl}`,
};

export const sizeMin = {
  md: "768px",
};
export const minW = {
  md: `min-width: ${sizeMin.md}`,
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

  
  // Style for Sweetalert
  .swal-overlay {    
    background-color: rgba(0, 0, 0, 0);   
  }

  .swal-overlay--show-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 70%;
    left: 30%;   
  } 
  
  .warningAlert {
    background-color: ${theme.lightRed};
    position: absolute;
    top: 36px;
    right: 36px;
    height: 40px;
    margin: 0;
    width: auto;
  }

  .swal-content {
    height: 100%; 
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 0 16px;
    margin: 0;
  }

  .forSweetAlert {
    font-size: 16px;
    color: ${theme.white};
  }

  @media screen and (${maxW.md}) {
    .swal-overlay--show-modal {
      width: auto;
      left: 0;
    }
    .warningAlert {
      top: 0;
      right: 0;
      width: 100%;
      border-radius: 0;
    }
  }  
`;
