import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import SignUpPic from "../../../assets/img/SignUp.svg";
import eyeClosed from "../../../assets/icon/ClosedEye.svg";
import eyeOpened from "../../../assets/icon/OpenedEye.svg";
import { NavLink } from "react-router-dom";
import { Button } from "../../../ui/button/button";
import { maxW, size, theme } from "../../../assets/theme/theme";
import { useDispatch } from "react-redux";
import { setRegister } from "../../../modules/authorization/authorizationThunk";
import { CustomInput } from "../../../ui/customInput/customInput";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const onSubmit = ({
    userName,
    login,
    password,
  }: {
    userName: string;
    login: string;
    password: string;
  }) => {
    dispatch(setRegister({ userName, login, password }));
  };

  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <SignStyle>
      <FormStyle onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign Up</Title>
        <FormGroup>
          <StyledLabel>Name</StyledLabel>
          <CustomInput
            type={"name"}
            name={"userName"}
            errors={errors}
            register={register}
          />
        </FormGroup>
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
            src={isRevealPwd ? eyeOpened : eyeClosed}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
          <CustomInput
            type={isRevealPwd ? "text" : "password"}
            name={"password"}
            errors={errors}
            register={register}
          />
        </FormGroup>
        <FormGroup>
          <StyledLabel>Enter your password again</StyledLabel>
          <HideShowEye
            src={isRevealPwd ? eyeOpened : eyeClosed}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
          <CustomInput
            type={isRevealPwd ? "text" : "password"}
            name={"confirm"}
            errors={errors}
            register={register}
          />
        </FormGroup>
        <CheckboxStyledDiv>
          <CustomInput
            type={"checkbox"}
            name={"checkbox"}
            errors={errors}
            register={register}
            checkbox
          />
        </CheckboxStyledDiv>

        <div style={{ marginBottom: "24px" }}>
          <Button name="Sign Up" red large />
        </div>

        <SignLink>
          <span style={{ alignItems: "center" }}>
            Already a member?{" "}
            <NavLink style={{ color: `${theme.red}` }} to="/signIn">
              Sign In
            </NavLink>{" "}
          </span>
        </SignLink>
      </FormStyle>
      <SignPictureStyle>
        <StyledPicture src={SignUpPic} alt="SignIn" />
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
      max-width: 100%;
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
  font-size: 14px;
  color: ${theme.grey};

  @media screen and ${maxW.lg} {
    font-size: 17px;
  }
`;

export const SignLink = styled.div`
  text-align: center;
  color: ${theme.grey};
  font-size: 14px;

  @media screen and ${maxW.slg} {
    font-size: 17px;
  }
`;

const CheckboxStyledDiv = styled.div`
  display: flex;
  align-items: baseline;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 24px;
  color: ${theme.grey};

  @media (max-width: ${size.lg}) {
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
`;

const StyledPicture = styled.img`
  max-width: 660px;
  width: 100%;
  max-height: 414px;
`;
