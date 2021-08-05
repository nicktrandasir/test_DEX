import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import SignUpPic from "./../../assets/img/SignUp.svg"
import eyeClosed from "./../../assets/icon/ClosedEye.svg"
import eyeOpened from "./../../assets/icon/OpenedEye.svg"
import {NavLink} from "react-router-dom";
import Button from "../../ui/button/button";
import {maxW, size, theme} from "../../assets/theme/theme";
import {useDispatch} from "react-redux";
import {setRegister} from '../../modules/authorization/authorizationThunk';


const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm( {
        mode: "onBlur"
    });



    const dispatch = useDispatch();
    const onSubmit = ({userName, login, password}: any) => {

        dispatch(setRegister({userName, login, password}))
        console.log({userName, login, password})
    }

    const [isRevealPwd, setIsRevealPwd] = useState(false);





    return (
        <SignStyle>
            <FormStyle onSubmit={handleSubmit(onSubmit)}>

                <Title>Sign Up</Title>
                <FormGroup>
                    <StyledLabel>Name</StyledLabel>
                    <StyledInput type="name"
                                 {...register("userName")}
                                 required
                    />
                </FormGroup>
                <FormGroup>
                    <StyledLabel>Login</StyledLabel>
                    <StyledInput type="login"
                                 {...register("login")}
                                 required
                    />

                </FormGroup>
                <FormGroup>
                    <StyledLabel>Password</StyledLabel>
                    <HideShowEye
                        src={isRevealPwd ? eyeOpened : eyeClosed}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />
                    <StyledInput type={isRevealPwd ? "text" : "password"}
                                 {...register("password")}
                                 required
                    />
                </FormGroup>
                <FormGroup>
                    <StyledLabel>Enter your password again</StyledLabel>
                    <HideShowEye
                        src={isRevealPwd ? eyeOpened : eyeClosed}
                        onClick={() => setIsRevealPwd(prevState => !prevState)}
                    />
                    <StyledInput type={isRevealPwd ? "text" : "password"}
                                 required {...register("confirm")}
                    />

                </FormGroup>
                <CheckboxStyledDiv>

                            <CheckboxStyle {...register("checkbox", {required: 'This is required'})}
                                           type="checkbox"/>
                            <label>I accept the agreement</label>


                    {errors.checkbox && errors.checkbox.type === "required" &&
                    <div style={{color: "red"}}>You must be accept the agreement.</div>}



                </CheckboxStyledDiv>
                <div style={{marginBottom: "24px"}}>
                    <Button
                        border="none"
                        color={theme.white}
                        backgroundColor={theme.red}
                        width="100%"
                        children="Sign In"
                        type="submit"
                        hover={theme.lightRed}
                        activeColor={theme.darkRed}

                    />
                </div>
                <SignLink>
                    <span style={{alignItems: 'center'}}>Already a member?  <NavLink style={{color: `${theme.red}`}}
                                                                                     to="/signIn">Sign In</NavLink> </span>
                </SignLink>

            </FormStyle>
            <SignPictureStyle>
                <StyledPicture src={SignUpPic} alt="SignIn"/>
            </SignPictureStyle>
        </SignStyle>
    );
};
export default SignUp;

export const SignStyle = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 992px) {
    grid-template-columns: 60% 40%;

    @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 992px) {
    padding: 24px;
    width: calc(100vw - 48px);

    Button {
      max-width: 100%;
    }
  }
`;


const StyledInput = styled.input`
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 8px;
  height: 40px;
  line-height: 24px;
  max-width: 100%;
  width: 366px;
  padding: 0;
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

  @media screen and ${maxW.md} {
    max-width: 100%;
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
  line-height: 24px;
  color: ${theme.grey};

  @media screen and ${maxW.lg} {
    font-size: 17px;
    line-height: 25px;
  }
`;


export const SignLink = styled.div`
  text-align: center;
  color: ${theme.grey};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and ${maxW.slg} {
    font-size: 17px;
    line-height: 25px;
  }
`;

const CheckboxStyledDiv = styled.div`
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

const CheckboxStyle = styled.input`
  background: ${theme.white};
  box-sizing: border-box;
  position: relative;
  margin-right: 10px;
  vertical-align: text-bottom;
  border-radius: 2px;
  height: 12px;
  width: 12px;
  border: 1px solid ${theme.grey};
  appearance: none;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.red};
    background: ${theme.white};
  }

  &::before {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 3px;
    width: 3px;
    height: 6px;
    border-style: solid;
    border-color: ${theme.white};
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
    opacity: 0;
  }

  &:checked {
    color: ${theme.white};
    border-color: ${theme.red};
    background: ${theme.red};

    &::before {
      opacity: 1;
    }

    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
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