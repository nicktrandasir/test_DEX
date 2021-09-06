import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import { setRegisterThunk } from "../../modules/authorization/authorizationThunk";
import { SignLayout } from "../../components/sign/signLayout";
import { CustomInput } from "../../ui/customInput/customInput";
import eyeOpened from "../../assets/icon/OpenedEye.svg";
import eyeClosed from "../../assets/icon/ClosedEye.svg";
import { Checkbox } from "../../ui/customCheckbox/customCheckbox";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import {pathRouts} from "../routes";
import {useHistory} from "react-router-dom";
import {AppStateType} from "../../core/redux/rootReducer";

export const SignUp = () => {
  const history = useHistory();
  const { isAuth } = useSelector((state: AppStateType) => state.auth);
  useEffect(() => {
    isAuth && history.push(pathRouts.Teams);
  }, [isAuth, history]);

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
    dispatch(setRegisterThunk({ userName, login, password }));
  };

  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <SignLayout onSubmit={handleSubmit(onSubmit)} signUp>
      <FormGroup>
        <StyledLabel>Name</StyledLabel>
        <CustomInput
          required="Required"
          type={"name"}
          name={"userName"}
          errors={errors}
          register={register}
        />
      </FormGroup>

      <FormGroup>
        <StyledLabel>Login</StyledLabel>
        <CustomInput
          required="Required"
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
          required="Required"
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
          required="Required"
          type={isRevealPwd ? "text" : "password"}
          name={"confirm"}
          errors={errors}
          register={register}
        />
      </FormGroup>

      <CheckboxStyle>
        <Checkbox
          required="You must be accept the agreement."
          name={"checkbox"}
          errors={errors}
          register={register}
        />
      </CheckboxStyle>
    </SignLayout>
  );
};

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 24px;
  color: ${theme.grey};
  font-weight: 500;
  font-size: 14px;
`;
const CheckboxStyle = styled.div`
  position: relative;
  margin-bottom: 24px;
  color: ${theme.grey};
  font-weight: 500;
  font-size: 14px;

  @media screen and (${maxW.lg}) {
    font-size: 15px;
  }
`;

const HideShowEye = styled.img`
  position: absolute;
  right: 12px;
  top: 36px;

  @media screen and (${maxW.lg}) {
    top: 40px;
  }
`;

const StyledLabel = styled.label`
  font-size: 14px;
  color: ${theme.grey};

  @media screen and (${maxW.lg}) {
    font-size: 17px;
  }
`;
