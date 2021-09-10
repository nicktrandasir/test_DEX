import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { HeaderSidebarLayout } from "../headerSidebar/headerSidebarLayout";
import { FileInput } from "../../ui/fileInput/fileInput";
import { Button } from "../../ui/button/button";
import { pathRouts } from "../../pages/routes";

interface IProps {
  team?: boolean;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  setValue: (ValueType: any, ActionTypes: any) => void;
  defaultValue?: any;
  onCancel?: () => void;
}

export const AddUpdateLayout: FC<IProps> = ({
  children,
  team,
  onSubmit,
  setValue,
  defaultValue,
  onCancel,
}) => {



  return (
    <HeaderSidebarLayout>
      <AddItemContainer>
        <AddForm>
          <DetailsTitle>
            <NavLink
              style={{ textDecoration: "none" }}
              to={team ? pathRouts.Teams : pathRouts.Players}
            >
              <RedTitle>{team ? "Teams" : "Players"}</RedTitle>
            </NavLink>
            <StyledSlash>/</StyledSlash>
            <RedTitle>{team ? "Add new team" : "Add new player"}</RedTitle>
          </DetailsTitle>
          <AddFormStyle onSubmit={onSubmit}>
            <div>
              <FileInput
                name={team ? "imageUrl" : "avatarUrl"}
                defaultValue={
                  team ? defaultValue?.imageUrl : defaultValue?.avatarUrl
                }
                setValue={setValue}
                team={team}
              />
            </div>
            <InputsButtonStyle>
              {children}
              <ButtonsStyle>
                <Button onClick={onCancel} name="Cancel" small />
                <Button name="Save" red small />
              </ButtonsStyle>
            </InputsButtonStyle>
          </AddFormStyle>
        </AddForm>
      </AddItemContainer>
    </HeaderSidebarLayout>
  );
};

const AddItemContainer = styled.div`
  display: grid;
  padding: 32px 80px;
  height: fit-content;
  max-height: calc(100vh - 80px);
  background: ${theme.lightestGrey1};

  @media screen and (${maxW.md}) {
    padding: 16px 0 0 0;
  }
`;

const InputsButtonStyle = styled.div`
  @media screen and (${maxW.ssm}) {
    width: 100%;
  }
`;

const ButtonsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;
const AddForm = styled.div`
  background: ${theme.white};
  grid-template-rows: 69px auto;
  display: grid;
  border-radius: 10px;

  @media screen and (${maxW.md}) {
    border-radius: 0;
  }
`;

const DetailsTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 32px;
`;

const AddFormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 25px;
  padding: 48px 25px;

  @media screen and (${maxW.lg}) {
    height: min-content;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }

  @media screen and (${maxW.ssm}) {
    grid-gap: 48px;
  }
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

  @media screen and (${maxW.md}) {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }
`;
