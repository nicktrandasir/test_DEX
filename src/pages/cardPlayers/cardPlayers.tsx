import React, { useMemo } from "react";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { AppStateType } from "../../core/redux/rootReducer";
import { clearUpdatedPlayer } from "../../modules/players/playersSlice";
import { getPlayers } from "../../modules/players/playersThunk";
import { getTeams } from "../../modules/teams/teamsThunk";
import { CardItemsLayout } from "../../components/сardItems/cardItemsLayout";

export const CardPlayers = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddPlayer = () => {
    dispatch(clearUpdatedPlayer());
    history.push("/addUpdatePlayer");
  };

  useMemo(() => {
    dispatch(getTeams());
    dispatch(getPlayers());
    //eslint-disable-next-line
  }, []);
  const { teams } = useSelector((state: AppStateType) => state.teams);
  const { players } = useSelector((state: AppStateType) => state.players);



  const allPlayers = useMemo(
    () =>
      players?.map((player) => {

        const teamName = teams.find((team) => team.id === player.team);

        return (
        <CardItem>
          <StyledLink to={"/detailsPlayer/" + player.id}>
            <PlayerPhotoDiv>
              <PlayerPhoto
                src={`http://dev.trainee.dex-it.ru${player.avatarUrl}`}
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
              <TeamName>
                {teamName?.name}
              </TeamName>
            </ItemInfo>
          </StyledLink>
        </CardItem>
      )}),
    [players, teams]
  );

  return (
    <CardItemsLayout items={players} teams={teams} onAddPlayer={onAddPlayer}>
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
