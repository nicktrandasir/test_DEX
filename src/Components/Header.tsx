import React from 'react';
import logo from './../assets/img/logo.svg'
import profile from './../assets/icon/profile.svg'
import styled from 'styled-components';
import { theme } from '../Common/GlobalStyle';

const Header = () => {

    return (
        <HeaderStyle>
            <LogoHeader>
                <img src={logo} alt="Logo"/>
            </LogoHeader>
            <UserAvatarForHeader>
                <p>User name</p>
                <img src={profile} alt="profile"/>
            </UserAvatarForHeader>


        </HeaderStyle>
    );
};

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  position: fixed; 
  width: 100vw;
 
  height: 80px;
  z-index: 3;
  background: ${theme.white};
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
  justify-content: space-between;
 @media screen and (max-width: 768px) {
   justify-content: center;
   height: 62px;

  
 }
`;
export const LogoHeader = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  padding: 0 0 0 51px;
  @media screen and (max-width: 768px) {
    
    padding: 0;
  }
`;
export const UserAvatarForHeader = styled.div`
  display: flex;
  max-height: 100%;
  font-size: 14px;
  line-height: 24px;
  padding: 0 51px 0 0;
  align-items: center;
  p {
    font-style: normal;
    padding-right: 16px;
    line-height: 14px;
    font-weight: 500;
    color: ${theme.darkGrey};
  }
  img {
    height: 36px;
  }
  
  @media(max-width: 768px) {
   display: none;
  }
`;