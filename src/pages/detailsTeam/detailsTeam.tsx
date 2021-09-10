import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { maxW, theme } from "../../assets/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeamThunk, getTeamThunk } from "../../modules/teams/teamsThunk";
import { AppStateType } from "../../core/redux/rootReducer";
import { teamForUpdate } from "../../modules/teams/teamsSlice";
import { getPlayersThunk } from "../../modules/players/playersThunk";
import { Roster } from "./components/roster";
import { DetailsLayout } from "../../components/details/detailsLayout";
import { pathRouts } from "../routes";
import { BaseUrl } from "../../api/baseRequest";

export const DetailsTeam = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, name, division, conference, foundationYear, imageUrl } =
    useSelector((state: AppStateType) => state.teams.team);
  const { playersCount, selectedTeams } = useSelector(
    (state: AppStateType) => state.players
  );
  const selectTeams: any = selectedTeams && selectedTeams.map((team) => team);
  const { teamId } = useParams<{ teamId: string }>();

  useEffect(() => {
    dispatch(getTeamThunk({ id: +teamId }));
    dispatch(
      getPlayersThunk({
        currentPage: 1,
        pageSize: playersCount,
        searchName: "",
        teamIds: selectTeams,
      })
    );
  }, [dispatch, teamId]);

  const onDeleteTeam = async () => {
    await dispatch(deleteTeamThunk({ id }));
    history.push(pathRouts.Teams);
  };

  const onUpdateTeam = () => {
    dispatch(teamForUpdate());
    history.push(pathRouts.AddUpdateTeam + teamId);
  };

  return (
    <DetailsLayout
      team
      onUpdateItem={onUpdateTeam}
      onDeleteItem={onDeleteTeam}
      name={name}
    >
      <TeamInfo>
        <PhotoToDetailsDiv>
          <DetailsTeamPhoto src={`${BaseUrl}${imageUrl}`} alt="TeamPhoto" />
        </PhotoToDetailsDiv>

        <InfoToDetails>
          <NameTeam>{name}</NameTeam>

          <YearAndDivision>
            <div>
              <MainTitle> Year of foundation</MainTitle>
              <SecondaryTitle>{foundationYear}</SecondaryTitle>
            </div>
            <div>
              <MainTitle>Division</MainTitle>
              <SecondaryTitle>{division}</SecondaryTitle>
            </div>
          </YearAndDivision>

          <NameConference>
            <MainTitle>Conference</MainTitle>
            <SecondaryTitle>{conference}</SecondaryTitle>
          </NameConference>
        </InfoToDetails>
      </TeamInfo>

      <Roster id={id} />
    </DetailsLayout>
  );
};

const TeamInfo = styled.div`
  display: grid;
  background: linear-gradient(
    276.45deg,
    ${theme.darkGrey1} 0%,
    ${theme.grey} 100.28%
  );
  border-radius: 0 0 10px 10px;
  grid-template-columns: auto auto;
  height: 404px;
  max-height: 100%;

  @media screen and (${maxW.xl}) {
    grid-template-columns: auto;
    justify-content: center;

    height: max-content;
    padding-bottom: 48px;
  }
  @media screen and (${maxW.md}) {
    border-radius: 0;
    padding-bottom: 38px;
    grid-template-rows: repeat(2, auto);
  }
`;

const PhotoToDetailsDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (${maxW.md}) {
    justify-content: center;
  }
`;

const DetailsTeamPhoto = styled.img`
  width: 210px;

  @media screen and (${maxW.xl}) {
    padding: 48px 0 48px 0;
  }

  @media screen and (${maxW.md}) {
    width: 89px;
  }
`;

const InfoToDetails = styled.div`
  display: grid;
  grid-template-rows: 49px 58px 58px;
  grid-gap: 40px 54px;
  align-content: center;

  @media screen and (${maxW.xl}) {
    text-align: center;
    grid-template-rows: auto auto auto;
    gap: 32px;
  }
`;

const NameTeam = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.white};
  padding-bottom: 16px;

  @media screen and (${maxW.md}) {
    font-weight: 800;
    font-size: 17px;
    line-height: 25px;
  }
`;

const YearAndDivision = styled.div`
  display: grid;
  grid-template-columns: 242px 150px;
  column-gap: 84px;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  color: ${theme.white};

  @media screen and (${maxW.xl}) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    row-gap: 32px;
  }
`;

const NameConference = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: ${theme.white};
  padding-bottom: 16px;
`;

const MainTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: ${theme.white};
  padding-bottom: 8px;

  @media screen and (${maxW.md}) {
    font-weight: 800;
    font-size: 17px;
    line-height: 25px;
  }
`;
const SecondaryTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.white};

  @media screen and (${maxW.md}) {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }
`;
