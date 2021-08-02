import styled, {createGlobalStyle} from 'styled-components';

export const theme = {
    darkGrey: `#303030`,
    darkGrey1: `#393939`,
    grey: `#707070`,
    lightGrey: `#9C9C9C`,
    lightestGrey: `#D1D1D1`,
    lightestGrey1: `#F6F6F6`,
    white: '#FFFFFF',
    lightBlue: '#F5FBFF',
    darkRed: `#C60E2E`,
    red: `#E4163A`,
    lightRed: `#FF5761`,
    lightestRed: `#FF768E`,
    blue: `#344472`
};

const size = {
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px"
}

export const maxW = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`
}

export const minW = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    md: `(min-width: ${size.md})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.xl})`,
    xxl: `(min-width: ${size.xxl})`
}


export const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    background: ${theme.white};
    font-family: 'Avenir', Sans-Serif;
    box-sizing: border-box;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;


export const GlobalGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-rows: 62px auto;
  }

  label {
    color: ${theme.grey};
    padding-bottom: 8px;
  }

  input {
    padding-left: 12px;
    font-size: 14px;
    background: ${theme.lightestGrey1};
    border-radius: 4px;
    height: 40px;
    border: none;
    align-items: center;
    justify-items: center;

    &:hover {
      background-color: ${theme.lightestGrey};
    }
  }


`;
export const SidebarAndContent = styled.div`
  display: grid;
  grid-template-columns: 140px auto;
  min-height: calc(100vh - 80px);
  background: ${theme.lightestGrey1};
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 0 100%;
    min-height: calc(100vh - 62px);
    margin-top: 62px;
  }



`;

export const Content = styled.div`
  display: grid;
  padding: 32px 80px;
  background: ${theme.lightestGrey1};
  grid-template-rows: auto auto 40px;
  grid-gap: 32px;

  @media screen and (max-width: 992px) {
    row-gap: 16px;
    padding: 16px 12px;
  }

  @media screen and (max-width: 513px) {

    &.players {
      grid-template-rows: 152px auto auto;
    }

    &.teams {
      grid-template-rows: 96px auto auto;
    }

    img {
      padding: 0;
    }

  }

`;

export const AddItemContent = styled.div`
  display: grid;
  padding: 32px 80px;
  height: fit-content;
  max-height: calc(100vh - 80px);
  background: ${theme.lightestGrey1};

  p {
    color: ${theme.red};
  }

  @media screen and (max-width: 768px) {
    padding: 16px 0 0 0;
  }
`;
export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  height: min-content;

  @media screen and (max-width: 513px) {
    flex-wrap: wrap;
    height: max-content;
    Button {
      margin-top: 16px;
    }

  }

`;

export const ThirdRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 513px) {
    align-items: flex-end;
  }
`;

export const ContentRow = styled.div`
  display: grid;

`;

export const CardEmpty = styled.div`
  background: ${theme.white};
  border-radius: 15px;
  max-width: 556px;
  width: 100%;
  max-height: 570px;
  text-align: center;
  padding: 48px 0;
  margin: auto;

  p {
    font-size: 24px;
    line-height: 33px;
    color: ${theme.grey};
    margin: 0;

    &.h3 {
      font-weight: 800;
      line-height: 49px;
      font-size: 36px;
      margin-bottom: 24px;
      color: ${theme.lightestRed};
    }
  }

  img {
    padding-bottom: 48px;
  }


  @media screen and (max-width: 513px) {
    padding-top: 48px;
    border-radius: 0;
    margin: 0 -12px;
    width: auto;
    p.h3 {
      font-style: normal;
      font-weight: 800;
      font-size: 17px;
      line-height: 25px;
      margin-bottom: 45px;
    }

    p {
      font-weight: normal;
      font-size: 15px;
      line-height: 24px;
    }

    img.players {
      width: 225px;
    }

    img.teams {
      width: 339px;
    }

  }
`;

export const AddFormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 25px;
  padding: 48px 25px;

  @media screen and (max-width: 992px) {
    height: min-content;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }

  @media screen and (max-width: 513px) {
    grid-gap: 48px;
  }

`;

export const AddFormContainer = styled.div`
  background: ${theme.white};
  grid-template-rows: 69px auto;
  display: grid;

  border-radius: 10px;

  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`;


export const CardItemsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  background-color: ${theme.lightestGrey1};
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }

`;


export const TitleEditDelete = styled.div`
  height: 69px;
  background: ${theme.white};
  border: 0.5px solid ${theme.lightGrey};
  border-radius: 10px 10px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto auto;
  }
  @media screen and (max-width: 768px) {
    border-radius: 0;
    height: 48px;
  }


`;

export const DetailsTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 32px;

  a {
    text-decoration: none;
  }

  div {
    color: ${theme.lightGrey};
    padding-left: 5px;
    padding-right: 5px;
  }



`;
export const RedTitle = styled.p`
  color: ${theme.red};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and (max-width: 992px) {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const MainTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: ${theme.white};
  padding-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-weight: 800;
    font-size: 17px;
    line-height: 25px;
  }
`;
export const SecondaryTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.white};
  @media screen and (max-width: 768px) {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }
`;


export const EditDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 32px;
  column-gap: 21px;
`;

export const SignStyle = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  height: 100vh;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 49px;
    color: ${theme.blue};
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 60% 40%;

    @media screen and (max-width: 768px) {
      grid-template-columns: 100% 0;
    }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 24px;

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.grey};
  }

  img {
    position: absolute;
    right: 12px;
    bottom: 12px;
  }

  @media screen and (max-width: 900px) {
    label {
      font-size: 17px;
      line-height: 25px;
    }
  }
`;
export const FormStyle = styled.div`
  margin: 0 auto;
  max-width: 366px;

  input {
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    margin-top: 8px;
    height: 40px;
    line-height: 24px;
    width: 366px;
    background: ${theme.lightestGrey1};

    &[type=checkbox] {
      padding-left: 12px;
    }

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${theme.lightestGrey};
    }
  }

  Button {
    margin-bottom: 24px;
  }

  span {
    align-items: center;

    a {
      color: ${theme.red};
    }
  }

  @media screen and (max-width: 992px) {
    padding: 24px;
    width: calc(100vw - 48px);
    input {
      width: 100%;
    }

    p {
      text-align: center;
    }

    Button {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    p {
      text-align: center;
    }
  }
`;

export const SignLink = styled.div`
  text-align: center;
  color: ${theme.grey};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and (max-width: 900px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

export const SignPictureStyle = styled.div`
  background: ${theme.lightBlue};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 660px;
    width: 100%;
    max-height: 414px;
  }
`;