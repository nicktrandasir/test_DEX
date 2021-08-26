import React, { FC } from "react";
import { Search } from "../../ui/search/search";
import { CustomSelect } from "../../ui/customSelect/customSelect";
import { Button } from "../../ui/button/button";
import PlayersEmpty from "../../assets/img/PlayersEmpty.svg";
import { PaginationComponent } from "../../ui/pagination/pagination";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { IPlayer } from "../../api/dto/IPlayer";
import { ITeam } from "../../api/dto/ITeam";
import TeamsEmpty from "./../../assets/img/TeamsEmpty.svg";
import { HeaderSidebarLayout } from "../headerSidebar/headerSidebarLayout";

interface IProps {
  items: IPlayer[] | ITeam[];
  teams?: ITeam[];
  onAddPlayer: () => void;
  teamsSize?: boolean;
}

export const CardItemsLayout: FC<IProps> = ({
  children,
  items,
  teams,
  onAddPlayer,
  teamsSize,
}) => {
  const optionsDivision = teams?.map((team) => {
    return { label: team.name, value: team.id };
  });

  return (
    <HeaderSidebarLayout>
      <Content teamsSize={teamsSize}>
        <FirstRow>
          <InputsBlock>
            <Search />
            <BlockForSelect>
              {teams ? (
                <CustomSelect
                  isMulti
                  isClearable
                  isSearchable={false}
                  options={optionsDivision}
                />
              ) : (
                ""
              )}
            </BlockForSelect>
          </InputsBlock>
          <BlockForButton teamsSize={teamsSize}>
            <Button name="Add +" red onClick={onAddPlayer} />
          </BlockForButton>
        </FirstRow>

        {items && items.length !== 0 ? (
          <div>{children}</div>
        ) : (
          <CardEmpty>
            <CardEmptyImg
              src={!teams ? TeamsEmpty : PlayersEmpty}
              alt="Picture Empty"
            />
            <CardEmptyTitle>Empty here</CardEmptyTitle>
            <CardEmptyText>
              {!teams
                ? "Add new teams to continue"
                : "Add new players to continue"}
            </CardEmptyText>
          </CardEmpty>
        )}

        <ThirdRow>
          <PaginationComponent />
        </ThirdRow>
      </Content>
    </HeaderSidebarLayout>
  );
};

const Content = styled.div<{ teamsSize?: boolean }>`
  display: grid;
  padding: 32px 80px;
  background: ${theme.lightestGrey1};
  grid-template-rows: 40px calc(100% - 144px) 40px;
  grid-gap: 32px;

  @media screen and (${maxW.xl}) {
    grid-template-rows: ${(props) =>
      props.teamsSize ? "40px auto 40px" : "96px auto 40px"};
  }

  @media screen and (${maxW.lg}) {
    row-gap: 16px;
    padding: 16px 12px;
  }

  @media screen and (${maxW.ssm}) {
    grid-template-rows: ${(props) =>
      props.teamsSize ? "96px auto 40px" : "152px auto auto"};
  }
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  height: min-content;

  @media screen and (${maxW.ssm}) {
    flex-wrap: wrap;
    height: max-content;
  }
`;

const ThirdRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (${maxW.ssm}) {
    align-items: flex-end;
  }
`;

const InputsBlock = styled.div`
  display: flex;

  @media screen and (${maxW.xl}) {
    flex-wrap: wrap;
    gap: 16px;
  }

  @media screen and (${maxW.ssm}) {
    width: 100%;
  }
`;

const BlockForSelect = styled.div`
  width: 364px;
  padding-right: 24px;

  @media screen and (${maxW.ssm}) {
    width: 100%;
    padding-right: 0;
  }
`;

const BlockForButton = styled.div<{ teamsSize?: boolean }>`
  @media screen and (${maxW.ssm}) {
    width: 100%;
    padding-top: ${(props) => (props.teamsSize ? "" : "16px")};
  }
`;

const CardEmpty = styled.div`
  background: ${theme.white};
  border-radius: 15px;
  max-width: 556px;
  width: 100%;
  max-height: 570px;
  text-align: center;
  padding: 48px 0;
  margin: auto;

  @media screen and (${maxW.ssm}) {
    padding-top: 48px;
    border-radius: 0;
    margin: 0 -12px;
    width: auto;
  }
`;

const CardEmptyImg = styled.img`
  padding-bottom: 48px;

  @media screen and (${maxW.ssm}) {
    width: 225px;
  }
`;

const CardEmptyTitle = styled.p`
  color: ${theme.grey};
  font-weight: 800;
  line-height: 49px;
  font-size: 36px;
  margin-bottom: 24px;
  color: ${theme.lightestRed};

  @media screen and (${maxW.ssm}) {
    font-style: normal;
    font-weight: 800;
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 45px;
  }
`;

const CardEmptyText = styled.p`
  font-size: 24px;
  line-height: 33px;
  color: ${theme.grey};
  margin: 0;

  @media screen and (${maxW.ssm}) {
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
  }
`;
