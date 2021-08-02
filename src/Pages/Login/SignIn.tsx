import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import Button from '../../Components/Button';
import signInPic from "./../../assets/img/SignIn.svg"
import eyeClosed from "../../assets/icon/ClosedEye.svg";
import {FormGroup, FormStyle, SignLink, SignPictureStyle, SignStyle} from '../../Common/GlobalStyle';
import eyeOpened from "../../assets/icon/OpenedEye.svg";


const SignIn = () => {

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
                    <p>Sign In</p>
                    <FormGroup>
                        <label>Login</label>
                        <input type="login"
                               {...register("login")}/>
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>

                        <img  src={isRevealPwd ? eyeClosed : eyeOpened}
                              onClick={() => setIsRevealPwd(prevState => !prevState)}/>
                        <input  type={isRevealPwd ? "text" : "password"}
                                id="pwd"
                               {...register("password")}/>
                    </FormGroup>
                    <div>
                        <Button
                            border="none"
                            color="#FFFFFF"
                            backgroundColor="#E4163A"
                            width="100%"
                            children="Sign In"
                            type="submit"
                            hover="#FF5761"
                            activeColor="#C60E2E"
                        />
                    </div>
                    <SignLink>
                        <span>Not a member yet?  <NavLink to="/signUp">Sign Up</NavLink> </span>
                    </SignLink>
                </form>
            </FormStyle>
            <SignPictureStyle>
                <img src={signInPic} alt="SignIn"/>
            </SignPictureStyle>

        </SignStyle>
    );
};
export default SignIn;


