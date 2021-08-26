import React from "react";
import styled from "styled-components";
import SignUpPic from "../../assets/img/SignUp.svg";
import { NavLink } from "react-router-dom";
import SignInPic from "../../assets/img/SignIn.svg";
import { maxW, theme } from "../../assets/theme/theme";
import { Button } from "../../ui/button/button";
import { FC } from "react";

interface IProps {
  signUp?: boolean;
  onSubmit?: any;
}

export const SignLayout: FC<IProps> = ({ signUp, children, onSubmit }) => {
  return (
    <SignStyle onSubmit={onSubmit}>
      <FormStyle>
        <Title>{signUp ? "Sign Up" : "Sign In"}</Title>
        {children}
        <div style={{ marginBottom: "24px" }}>
          <Button name={signUp ? "Sign Up" : "Sign In"} red large />
        </div>

        <SignLink>
          <span style={{ alignItems: "center" }}>
            {signUp ? "Already a member?" : "Not a member yet?"}{" "}
            <StyledLink to={signUp ? "/signIn" : "/signUp"}>
              {signUp ? "Sign In" : "Sign Up"}
            </StyledLink>
          </span>
        </SignLink>
      </FormStyle>
      <SignPictureStyle>
        <StyledPicture
          src={signUp ? SignUpPic : SignInPic}
          alt="Sign Picture"
        />
      </SignPictureStyle>
    </SignStyle>
  );
};

const FormStyle = styled.div`
  margin: 0 auto;
  max-width: 366px;

  @media screen and (${maxW.lg}) {
    padding: 24px;
    width: calc(100vw - 48px);

    Button {
      max-width: 100%;
    }
  }
`;

const SignStyle = styled.form`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  height: 100vh;

  @media screen and (${maxW.lg}) {
    grid-template-columns: 60% 40%;
  }
  @media screen and (${maxW.md}) {
    grid-template-columns: 100% 0;
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.blue};

  @media screen and (${maxW.lg}) {
    text-align: center;
  }
`;

const SignLink = styled.div`
  text-align: center;
  color: ${theme.grey};
  font-size: 14px;

  @media screen and (${maxW.slg}) {
    font-size: 17px;
  }
`;

const StyledLink = styled(NavLink)`
  color: ${theme.red};
`;

const SignPictureStyle = styled.div`
  background: ${theme.lightBlue};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledPicture = styled.img`
  max-width: 660px;
  width: 100%;
  max-height: 414px;
`;
