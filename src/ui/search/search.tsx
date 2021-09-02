import React from "react";
import { FC } from "react";
import { ChangeEvent } from "react";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import searchIcon from "./../../assets/icon/search.svg";

interface IProps {
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<IProps> = ({ onSearch }) => {
  return (
    <SearchStyle>
      <StyledSearch type="search" placeholder="Search..." onChange={onSearch} />
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 13px;
    right: 30px;
    width: 16px;
    height: 16px;
    background: url(${searchIcon}) center center no-repeat;
  }

  @media screen and (${maxW.ssm}) {
    justify-content: center;
    width: 100%;

    &:before {
      right: 12px;
    }
  }
`;

const StyledSearch = styled.input`
  position: relative;
  max-width: 100%;
  width: 364px;
  height: 40px;
  font-size: 14px;
  background: ${theme.white};
  padding-left: 12px;
  padding-right: 30px;
  margin-right: 22px;
  border: 0.5px solid ${theme.lightestGrey};
  box-sizing: border-box;
  border-radius: 4px;

  &:active {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  @media screen and (${maxW.ssm}) {
    width: 100%;
    margin-right: 0;
  }
`;
