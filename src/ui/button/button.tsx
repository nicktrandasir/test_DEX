import React from "react";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";

interface Props {
  name?: string;
  onClick?: any;
  red?: boolean;
  large?: boolean;
  small?: boolean;
  exSmall?: boolean;
  cancel?: boolean;
}

export const Button: React.FC<Props> = ({
  name,
  onClick,
  red,
  large,
  small,
  cancel,
}) => {
  return (
    <div>
      <ButtonStyle
        onClick={onClick}
        red={red}
        large={large}
        small={small}
        type={cancel ? "reset" : "submit"}
      >
        {name}
      </ButtonStyle>
    </div>
  );
};

const ButtonStyle = styled.button<{
  red?: boolean;
  large?: boolean;
  small?: boolean;
}>`
  border-radius: 4px;
  height: 40px;
  border: ${(props) => (props.red ? "none" : "1px solid #9C9C9C")};

  color: ${(props) => (props.red ? `${theme.white}` : `${theme.lightGrey}`)};

  background-color: ${(props) =>
    props.red ? `${theme.red}` : `${theme.white}`};

  width: ${(props) =>
    props.large ? "366px" : props.small ? "171px" : "104px"};

  &:hover {
    background-color: ${(props) =>
      props.red ? `${theme.lightRed}` : `${theme.lightestGrey}`};
  }

  &:disabled {
    background-color: ${(props) =>
      props.red ? `${theme.lightestGrey1}` : `${theme.lightestGrey1}`};
  }

  &:active {
    background-color: ${(props) =>
      props.red ? `${theme.darkRed}` : `${theme.grey}`};
  }

  @media screen and ${maxW.ssm} {
    width: ${(props) =>
      props.large 
          ? "calc(100vw - 24px)"
        : (props.small ? "100%" : "calc(100vw - 24px)")
  }
`;
