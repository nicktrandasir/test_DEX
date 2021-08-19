import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import SignOutIcon from "../../assets/icon/SignOut.svg";
import {Burger} from "../burger/burger";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../modules/authorization/authorizationSlice";
import { AppStateType } from "../../core/redux/rootReducer";

export const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

  const onSignOut = () => {
    isAuth && dispatch(logout());
    history.push("./signIn");
  };

  return (
    <SidebarStyle>
      <Burger />

      <SidebarNav>
        <Link to="/Teams">
          <TeamsIconStyle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.32675 5.33325C7.32675 6.43992 6.44008 7.33325 5.33341 7.33325C4.22675 7.33325 3.33341 6.43992 3.33341 5.33325C3.33341 4.22659 4.22675 3.33325 5.33341 3.33325C6.44008 3.33325 7.32675 4.22659 7.32675 5.33325ZM12.6601 5.33325C12.6601 6.43992 11.7734 7.33325 10.6667 7.33325C9.56008 7.33325 8.66675 6.43992 8.66675 5.33325C8.66675 4.22659 9.56008 3.33325 10.6667 3.33325C11.7734 3.33325 12.6601 4.22659 12.6601 5.33325ZM5.33341 8.66659C3.78008 8.66659 0.666748 9.44659 0.666748 10.9999V11.9999C0.666748 12.3666 0.966748 12.6666 1.33341 12.6666H9.33341C9.70008 12.6666 10.0001 12.3666 10.0001 11.9999V10.9999C10.0001 9.44659 6.88675 8.66659 5.33341 8.66659ZM10.0201 8.69992C10.2534 8.67992 10.4734 8.66659 10.6667 8.66659C12.2201 8.66659 15.3334 9.44659 15.3334 10.9999V11.9999C15.3334 12.3666 15.0334 12.6666 14.6667 12.6666H11.2134C11.2867 12.4599 11.3334 12.2333 11.3334 11.9999V10.9999C11.3334 10.0199 10.8067 9.27992 10.0467 8.72659C10.0447 8.72457 10.0427 8.72194 10.0405 8.71907C10.0354 8.71246 10.0294 8.70457 10.0201 8.69992Z" />
            </svg>
            <nav>Teams</nav>
          </TeamsIconStyle>
        </Link>

        <Link to="/Players">
          <PersonIconStyle>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.9999 8C15.9999 10.21 14.2099 12 11.9999 12C9.78989 12 7.99989 10.21 7.99989 8C7.99989 5.79 9.78989 4 11.9999 4C14.2099 4 15.9999 5.79 15.9999 8ZM3.99997 18C3.99997 15.34 9.32997 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H4.99997C4.44997 20 3.99997 19.55 3.99997 19V18Z" />
            </svg>
            <nav>Players</nav>
          </PersonIconStyle>
        </Link>
      </SidebarNav>

      <Link to="/signIn">
        <SignOutIconSidebar>
          <img src={SignOutIcon} alt="Sign out icon" onClick={onSignOut} />
        </SignOutIconSidebar>
      </Link>
    </SidebarStyle>
  );
};

const SidebarStyle = styled.div`
  display: grid;
  z-index: 1;
  background: ${theme.white};
  align-content: space-between;

  @media (max-width: 768px) {
    visibility: hidden;
    width: 50vw;
    z-index: 3;
  }
`;

const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamsIconStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  font-size: 12px;
`;

const Link = styled(NavLink)`
  color: ${theme.grey};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  text-decoration: none;

  svg {
    fill: ${theme.grey};
  }

  &.active {
    color: ${theme.red};

    svg {
      fill: ${theme.red};
    }
  }

  &.hover {
    color: ${theme.red};
  }

  nav {
    padding-top: 4px;
  }
`;

const PersonIconStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  font-size: 12px;
`;
const SignOutIconSidebar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

