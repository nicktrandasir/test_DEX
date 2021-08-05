import React, {useEffect, useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {NavLink, useHistory} from 'react-router-dom';
import Button from '../../ui/button/button';
import signInPic from "./../../assets/img/SignIn.svg"
import eyeClosed from "../../assets/icon/ClosedEye.svg";
import {maxW, theme} from '../../assets/theme/theme';
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../../modules/authorization/authorizationThunk";
import eyeOpened from "../../assets/icon/OpenedEye.svg";
import styled from "styled-components";
import {AppStateType} from '../../core/redux/rootReducer';

const SignIn = () => {
    const history = useHistory();
    const {isAuth} = useSelector((state: AppStateType) => state.auth)

    const {
        register,
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });
    const dispatch = useDispatch();
    const onSubmit = ({login, password}: {
        login: string
        password: string
    }) => {
        dispatch(setLogin({login, password}))
    }

    useMemo(() => {
        isAuth === true
            ? history.push('/Players')
            : console.log("not isAuth")
        //eslint-disable-next-line
    }, [isAuth]);


    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);

    return (
        <SignStyle>
            <FormStyle onSubmit={handleSubmit(onSubmit)}>

                <Title>Sign In</Title>
                <FormGroup>
                    <StyledLabel>Login</StyledLabel>
                    <StyledInput type="login"
                                 {...register("login")}
                                 required
                    />
                </FormGroup>
                <FormGroup>
                    <StyledLabel>Password</StyledLabel>
                    <HideShowEye src={isRevealPwd ? eyeClosed : eyeOpened}
                                 onClick={() => setIsRevealPwd(prevState => !prevState)}/>
                    <StyledInput type={isRevealPwd ? "text" : "password"}
                                 id="pwd"
                                 {...register("password")}
                                 required
                    />
                </FormGroup>
                <div style={{marginBottom: '24px'}}>
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
                    <span style={{alignItems: 'center'}}>Not a member yet?  <NavLink style={{color: `${theme.red}`}}
                                                                                     to="/signUp">Sign Up</NavLink> </span>
                </SignLink>

            </FormStyle>
            <SignPictureStyle>
                <StyledPicture src={signInPic} alt="SignIn"/>
            </SignPictureStyle>

        </SignStyle>
    );
};
export default SignIn;

export const SignStyle = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  height: 100vh;

  @media screen and ${maxW.lg} {
    grid-template-columns: 60% 40%;

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

  @media screen and ${maxW.lg} {
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