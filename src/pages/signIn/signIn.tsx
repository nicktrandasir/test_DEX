import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginThunk } from "../../modules/authorization/authorizationThunk";
import { AppStateType } from "../../core/redux/rootReducer";
import { SignLayout } from "../../components/sign/signLayout";
import { CustomInput } from "../../ui/customInput/customInput";
import eyeOpened from "../../assets/icon/OpenedEye.svg";
import eyeClosed from "../../assets/icon/ClosedEye.svg";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { pathRouts } from "../routes";

export const SignIn = () => {
  const history = useHistory();
  const { isAuth } = useSelector((state: AppStateType) => state.auth);
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(

  );
  const dispatch = useDispatch();
  const onSubmit = async ({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) => {
    await dispatch(setLoginThunk({ login, password }));
  };

  useEffect(() => {
    isAuth && history.push(pathRouts.Teams);
  }, [isAuth, history]);

  return (
    <SignLayout onSubmit={handleSubmit(onSubmit)}>
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
