import React from "react";
import logo from "../../assets/img/logo.svg";
import profile from "../../assets/icon/profile.svg";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { Burger } from "../burger/burger";

export const Header = () => {
  const userName = localStorage.name;
  return (
    <HeaderStyle>
      <Burger />
      <LogoHeader>
        <img src={logo} alt="Logo" />
      </LogoHeader>
      <UserAvatar>
        <UserName>{userName ?? "User name"}</UserName>
        <img style={{ height: "36px" }} src={profile} alt="profile" />
      </UserAvatar>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 80px;
  z-index: 3;
  background: ${theme.white};
  box-shadow: 0 1px 10px ${theme.lightestGrey};
  justify-content: space-between;

  @media screen and (${maxW.md}) {
    justify-content: center;
    height: 62px;
    width: 100%;
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  padding: 0 0 0 51px;

  @media screen and (${maxW.md}) {
    padding: 0;
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  max-height: 100%;
  font-size: 14px;
  line-height: 24px;
  padding: 0 51px 0 0;
  align-items: center;

  @media screen and (${maxW.md}) {
    display: none;
  }
`;

const UserName = styled.p`
  font-style: normal;
  padding-right: 16px;
  line-height: 14px;
  font-weight: 500;
  color: ${theme.darkGrey};
`;
