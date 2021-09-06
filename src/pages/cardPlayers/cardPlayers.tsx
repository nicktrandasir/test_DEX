import React, { ChangeEvent, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { AppStateType } from "../../core/redux/rootReducer";
import {
  clearUpdatedPlayer,
  setSearchPlayer,
  setSelectedTeam,
} from "../../modules/players/playersSlice";
import { getPlayersThunk } from "../../modules/players/playersThunk";
import { getTeamsThunk } from "../../modules/teams/teamsThunk";
import { CardItemsLayout } from "../../components/сardItems/cardItemsLayout";
import { pathRouts } from "../routes";
import { BaseUrl } from "../../api/baseRequest";

export const CardPlayers = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { teams, teamsCount } = useSelector(
    (state: AppStateType) => state.teams
  );
  const {
    players,
    playersCount,
    pageSize,
    currentPage,
    selectedTeams,
    searchPlayer,
  } = useSelector((state: AppStateType) => state.players);

  const selectTeams: any = selectedTeams && selectedTeams.map((team) => team);

  const onAddPlayer = () => {
    dispatch(clearUpdatedPlayer());
    history.push(pathRouts.AddUpdatePlayer);
  };

  useEffect(() => {
    dispatch(
      getTeamsThunk({
        currentPage: 1,
        pageSize: teamsCount,
        searchName: "",
      })
    );
    dispatch(
      getPlayersThunk({
        currentPage: 1,
        pageSize: 6,
        searchName: "",
        teamIds: [],
      })
    );
  }, [dispatch, teamsCount]);

  // ----------------------Размер страницы для селекта--------------------------------------------------------------
  const onPageSizeChange = useCallback(
    (e) => {
      dispatch(
        getPlayersThunk({
          currentPage: 1,
          pageSize: e.value,
          searchName: searchPlayer || "",
          teamIds: selectTeams,
        })
      );
    },
    [dispatch, selectTeams, searchPlayer]
  );

  // ----------------------Изменение страницы для пагинации---------------------------------------------------------
  const onPageChanged = useCallback(
    ({ selected }) => {
      dispatch(
        getPlayersThunk({
          currentPage: selected + 1,
          pageSize,
          searchName: searchPlayer || "",
          teamIds: selectTeams,
        })
      );
    },
    [dispatch, pageSize, selectTeams, searchPlayer]
  );

  // ----------------------Поиск------------------------------------------------------------------------------------
  const onSearch = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const selectTeams: any =
        selectedTeams && selectedTeams.map((team) => team);
      dispatch(setSearchPlayer(e.target.value));
      dispatch(
        getPlayersThunk({
          currentPage: 1,
          pageSize,
          searchName: e.target.value,
          teamIds: selectTeams,
        })
      );
    },
    [dispatch, pageSize, selectedTeams]
  );

  // ----------------------Мультиселект------------------------------------------------------------------------------
  const onSelect = useCallback(
    async (values) => {
      dispatch(
        getTeamsThunk({
          currentPage: 1,
          pageSize: 25,
          searchName: values?.target?.value || "",
        })
      );
      const selectTeamId =
        values?.length && values.map((item: any) => item.value);
      values?.target?.value === undefined &&
        (await dispatch(setSelectedTeam(selectTeamId)));
      values?.target?.value === undefined &&
        dispatch(
          getPlayersThunk({
            currentPage: 1,
            pageSize,
            searchName: searchPlayer || "",
            teamIds: selectTeamId,
          })
        );
    },
    [dispatch, pageSize, searchPlayer]
  );

  const allPlayers = useMemo(
    () =>
      players?.map((player) => {
        const teamName = teams.find((team) => team.id === player.team);

        return (
          <CardItem key={player.id}>
            <StyledLink to={pathRouts.DetailsPlayer + player.id}>
              <PlayerPhotoDiv>
                <PlayerPhoto
                  src={`${BaseUrl}${player.avatarUrl}`}
                  alt="Photo"
                />
              </PlayerPhotoDiv>
              <ItemInfo>
                <NameNumber>
                  {player.name}
                  <span style={{ color: `${theme.lightRed}` }}>
                    {""} #{player.number}
                  </span>
                </NameNumber>
                <TeamName>{teamName?.name}</TeamName>
              </ItemInfo>
            </StyledLink>
          </CardItem>
        );
      }),
    [players, teams]
  );

  return (
    <CardItemsLayout
      items={players}
      teams={teams}
      onAddItem={onAddPlayer}
      itemsCount={playersCount}
      currentPage={currentPage}
      pageSize={pageSize}
      onPageChanged={onPageChanged}
      onPageSizeChange={onPageSizeChange}
      onSearch={onSearch}
      onSelect={onSelect}
    >
      <CardItemsStyle>{allPlayers}</CardItemsStyle>
    </CardItemsLayout>
  );
};

export const CardItem = styled.div`
  display: grid;
  max-height: 100%;
  max-width: 100%;
  align-items: end;
  background: linear-gradient(
    121.57deg,
    ${theme.grey} 1.62%,
    ${theme.darkGrey1} 81.02%
  );
  border-radius: 4px;

  @media screen and (${maxW.ssm}) {
    height: max-content;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  height: 100px;
  background: ${theme.darkGrey};
  border-radius: 0 0 4px 4px;

  @media screen and (${maxW.ssm}) {
    height: 80px;
  }
`;

export const CardItemsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  gap: 24px;
  background-color: ${theme.lightestGrey1};

  @media screen and (${maxW.md}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
`;
const NameNumber = styled.p`
  font-style: normal;
  color: ${theme.white};
  font-weight: 500;
  font-size: 18px;
  line-height: 0;

  @media screen and (${maxW.ssm}) {
    font-size: 15px;
  }
`;

const TeamName = styled.p`
  font-style: normal;
  color: ${theme.lightGrey};
  font-weight: 500;
  font-size: 14px;
  line-height: 0;

  @media screen and (${maxW.ssm}) {
    font-size: 13px;
  }
`;

const PlayerPhotoDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: end;
  padding-top: 73px;

  @media screen and (${maxW.ssm}) {
    padding-top: 11px;
  }
`;

const PlayerPhoto = styled.img`
  width: 274px;
  max-width: 100%;
`;
