import React from "react";
import { NavLink } from "react-router-dom";
import editIcon from "../../assets/icon/edit.svg";
import deleteIcon from "../../assets/icon/delete.svg";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { HeaderSidebarLayout } from "../headerSidebar/headerSidebarLayout";
import { FC } from "react";
import { pathRouts } from "../../pages/routes";

interface IProps {
  team?: boolean;
  onUpdateItem: () => void;
  onDeleteItem: () => void;
  name: string;
}

export const DetailsLayout: FC<IProps> = ({
  children,
  team,
  onUpdateItem,
  onDeleteItem,
  name,
}) => {
  return (
    <HeaderSidebarLayout>
      <Content>
        <TitleEditDelete>
          <DetailsTitle>
            <NavLink
              style={{ textDecoration: "none" }}
              to={team ? pathRouts.Teams : pathRouts.Players}
            >
              <RedTitle>{team ? "Teams" : "Players"}</RedTitle>
            </NavLink>
            <StyledSlash>/</StyledSlash>
            <RedTitle>{name}</RedTitle>
          </DetailsTitle>

          <EditDelete>
            <img
              onClick={onUpdateItem}
              style={{ cursor: "pointer" }}
              src={editIcon}
              alt="Edit"
            />
            <img
              onClick={onDeleteItem}
              style={{ cursor: "pointer" }}
              src={deleteIcon}
              alt="Delete"
            />
          </EditDelete>
        </TitleEditDelete>
        {children}
      </Content>
    </HeaderSidebarLayout>
  );
};

const Content = styled.div`
  display: grid;
  padding: 32px 80px;
  height: fit-content;
  grid-template-rows: min-content;
  background: ${theme.lightestGrey1};

  @media screen and (${maxW.lg}) {
    padding: 16px 12px;
  }

  @media screen and (${maxW.md}) {
    padding: 16px 0;
  }
`;
const TitleEditDelete = styled.div`
  height: 69px;
  background: ${theme.white};
  border: 0.5px solid ${theme.lightGrey};
  border-radius: 10px 10px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (${maxW.xl}) {
    grid-template-columns: auto auto;
  }
  @media screen and (${maxW.md}) {
    border-radius: 0;
    height: 48px;
  }
`;

const DetailsTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 32px;
`;

const StyledSlash = styled.div`
  color: ${theme.lightGrey};
  padding-left: 5px;
  padding-right: 5px;
`;
const RedTitle = styled.p`
  color: ${theme.red};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and (${maxW.lg}) {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }
`;
const EditDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 32px;
  column-gap: 21px;
`;
