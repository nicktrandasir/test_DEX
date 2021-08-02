import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import SignUpPic from "./../../assets/img/SignUp.svg"
import eyeClosed from "./../../assets/icon/ClosedEye.svg"
import eyeOpened from "./../../assets/icon/OpenedEye.svg"
import {NavLink} from "react-router-dom";
import Button from "../../Components/Button";
import {FormGroup, FormStyle, maxW, SignLink, SignPictureStyle, SignStyle, theme} from "../../Common/GlobalStyle";


const SignUp = () => {
    const {
        register,
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = () => {

    }


    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);



    return (
        <SignStyle>
            <FormStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>Sign Up</p>
                    <FormGroup>
                        <label>Name</label>
                        <input type="name"
                               {...register("userName", {
                                   minLength: {
                                       value: 4,
                                       message: "must be longer than 4 chars"
                                   }
                               })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Login</label>
                        <input type="login"
                               {...register("login", {
                                   minLength: {
                                       value: 4,
                                       message: "must be longer than 4 chars"
                                   }
                               })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <img
                            src={isRevealPwd ? eyeOpened : eyeClosed}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                        <input     type={isRevealPwd ? "text" : "password"}
                                   name="password"
                                   value={pwd}
                                   onChange={e => setPwd(e.target.value)}
                                   {...register}

                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Enter your password again</label>
                        <img
                            src={isRevealPwd ? eyeOpened : eyeClosed}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                        <input type={isRevealPwd ? "text" : "password"}



                               {...register("password")}
                        />

                    </FormGroup>
                    <CheckboxStyle>
                        <input type="checkbox"/>
                        <label>I accept the agreement</label>
                    </CheckboxStyle>
                    <div>
                        <Button
                            border="none"
                            color="#FFFFFF"
                            backgroundColor="#E4163A"

                            width="100%"
                            children="Sign Up"
                            type="submit"
                            hover="#FF5761"
                            activeColor="#C60E2E"

                        />
                    </div>
                    <SignLink>
                        <span>Already a member?  <NavLink to="/signIn">Sign In</NavLink> </span>
                    </SignLink>
                </form>
            </FormStyle>
            <SignPictureStyle>
                <img src={SignUpPic} alt="SignIn"/>
            </SignPictureStyle>
        </SignStyle>
    );
};
export default SignUp;


const CheckboxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: flex-start;
  align-items: baseline;
  column-gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.grey};
  margin-bottom: 24px;

  input {
    background: ${theme.white};
    box-sizing: border-box;
    position: relative;
    border-radius: 2px;
    height: 12px;
    width: auto;
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
      left: 4px;
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
  }

  @media (max-width: ${maxW.lg}) {
    font-size: 17px;
    line-height: 25px;
  }
`;



