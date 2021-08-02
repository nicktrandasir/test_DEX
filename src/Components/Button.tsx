import React from "react";
import styled from "styled-components";
import {theme} from "../Common/GlobalStyle";

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    onClick?: () => void;
    width: string;
    type: any;
    backgroundColor: any;
    hover: any;
    activeColor: any
}

const Button: React.FC<Props> = ({
                                     border,
                                     color,
                                     children,
                                     onClick,
                                     width,
                                     type,
                                     backgroundColor,
                                     hover,
                                     activeColor
                                 }) => {

    return (
        <StyledButton
            onClick={onClick}
            style={{
                color,
                border

            }}
            width={width}
            backgroundColor={backgroundColor}
            hover={hover}
            activeColor={activeColor}
            type={type}
        >
            {children}
        </StyledButton>
    );
}

export default Button;

const StyledButton = styled.button<any>`
  height: 40px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.hover};
  }
  &:disabled {
    background-color:  ${theme.lightestGrey1};
  }
  &:active {
    background-color: ${(props) => props.activeColor};
  }
  
  @media screen and (max-width: 513px) {
    width: 100%;
   
  }
`;