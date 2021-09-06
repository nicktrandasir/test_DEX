import React from "react";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";

interface Props {
  name: string;
  onClick?: () => void;
  red?: boolean;
  large?: boolean;
  small?: boolean;
}

export const Button: React.FC<Props> = ({
  name,
  onClick,
  red,
  large,
  small,
}) => {



  return (
    <div>
      <ButtonStyle
        onClick={onClick}
        red={red}
        large={large}
        small={small}
        type={red ? "submit" : "reset"}

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
  border: ${(props) => (props.red ? "none" : `1px solid ${theme.lightGrey}`)};
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

  @media screen and (${maxW.ssm}) {
    width: 100%;
`;
