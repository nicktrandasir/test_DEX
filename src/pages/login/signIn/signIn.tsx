import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "../../../ui/button/button";
import signInPic from "../../../assets/img/SignIn.svg";
import eyeClosed from "../../../assets/icon/ClosedEye.svg";
import { maxW, theme } from "../../../assets/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../modules/authorization/authorizationThunk";
import eyeOpened from "../../../assets/icon/OpenedEye.svg";
import styled from "styled-components";
import { AppStateType } from "../../../core/redux/rootReducer";
import { CustomInput } from "../../../ui/customInput/customInput";

export const SignIn = () => {
  const history = useHistory();
  const { isAuth } = useSelector((state: AppStateType) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    dispatch(setLogin({ login, password }));
  };

  useEffect(() => {
    isAuth === true ? history.push("/Teams") : console.log("not isAuth");
    //eslint-disable-next-line
  }, [isAuth]);

  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <SignStyle>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign In</Title>
        <FormGroup>
          <StyledLabel>Login</StyledLabel>
          <CustomInput
            type={"login"}
            name={"login"}
            errors={errors}
            register={register}
          />
        </FormGroup>
        <FormGroup>
          <StyledLabel>Password</StyledLabel>
          <HideShowEye
            src={isRevealPwd ? eyeClosed : eyeOpened}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
          <CustomInput
            type={isRevealPwd ? "text" : "password"}
            errors={errors}
            name={"password"}
            register={register}
          />
        </FormGroup>

        <div style={{ marginBottom: "24px" }}>
          <Button name="Sign In" red large />
        </div>

        <SignLink>
          <span style={{ alignItems: "center" }}>
            Not a member yet?
            <NavLink style={{ color: `${theme.red}` }} to="/signUp">
              Sign Up
            </NavLink>
          </span>
        </SignLink>
      </FormStyle>
      <SignPictureStyle>
        <StyledPicture src={signInPic} alt="SignIn" />
      </SignPictureStyle>
    </SignStyle>
  );
};

export const SignStyle = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  height: 100vh;

  @media screen and ${maxW.lg} {
    grid-template-columns: 60% 40%;
  }
  @media screen and ${maxW.md} {
    grid-template-columns: 100% 0;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.blue};

  @media screen and ${maxW.lg} {
    text-align: center;
  }
`;

export const FormStyle = styled.form`
  margin: 0 auto;
  max-width: 366px;

  @media screen and ${maxW.lg} {
    padding: 24px;
    width: calc(100vw - 48px);

    Button {
      width: 100%;
    }
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const HideShowEye = styled.img`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const StyledLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${theme.grey};

  @media screen and ${maxW.lg} {
    font-size: 17px;
  }
`;

export const SignLink = styled.div`
  text-align: center;
  color: ${theme.grey};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  @media screen and ${maxW.lg} {
    font-size: 17px;
  }
`;

export const SignPictureStyle = styled.div`
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
