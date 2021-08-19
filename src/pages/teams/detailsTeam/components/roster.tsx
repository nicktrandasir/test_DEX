import React, { useMemo } from "react";
import { maxW, theme } from "../../../../assets/theme/theme";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../../core/redux/rootReducer";
import styled from "styled-components";

export const Roster = ({ id }: any  ) => {
  const { players } = useSelector((state: AppStateType) => state.players);

  const getAge = (birthDate: number) =>
    //@ts-ignore
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const teamPlayers = useMemo(
    () =>
      players?.map(
        (player) =>
          player.team === id && (
            <InfoSections>
              <FirstColumnSection>
                <div style={{width: "14px"}}>{player.number}</div>
                <PlayerInfo>
                  <PhotoPlayerRoster
                    src={`http://dev.trainee.dex-it.ru${player.avatarUrl}`}
                    alt="miniPhoto"
                  />
                  <NamePosInfo>
                    <StyledInfoSpan>{player.name}</StyledInfoSpan>
                    <StyledInfoSpan
                      style={{ color: `${theme.lightGrey}`, fontSize: "12px" }}
                    >
                      {player.position}
                    </StyledInfoSpan>
                  </NamePosInfo>
                </PlayerInfo>
              </FirstColumnSection>
              <SecondColumnSection>
                <div>{player.height} cm</div>
                <div>{player.weight} kg</div>
                <div>{getAge(player.birthday)}</div>
              </SecondColumnSection>
            </InfoSections>
          )
      ),
    [players, id]
  );

  return (
    <TeamPlayersInfo>
      <RosterSection>Roster</RosterSection>
      <InfoSections style={{ height: "40px" }}>
        <FirstColumnSection style={{gap: "48px" }}>
          <div>#</div>
          <PlayerInfo >Player</PlayerInfo>
        </FirstColumnSection>
        <SecondColumnSection>
          <div>Height</div>
          <div>Weight</div>
          <div>Age</div>
        </SecondColumnSection>
      </InfoSections>
      {teamPlayers}
    </TeamPlayersInfo>
  );
};

const TeamPlayersInfo = styled.div`
  border-radius: 10px;
  display: grid;
  grid-template-rows: auto;
  height: fit-content;
  color: ${theme.grey};
  border: 0.5px solid ${theme.lightGrey};
  background: ${theme.white};

  @media screen and ${maxW.md} {
    grid-template-rows: auto;
    height: fit-content;
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }
`;

const RosterSection = styled.div`
  display: grid;
  font-style: normal;
  font-weight: 500;
  height: 54px;
  font-size: 18px;
  align-items: center;
  padding-left: 32px;
  line-height: 25px;
  border-bottom: 0.5px solid ${theme.lightGrey};
  box-sizing: border-box;

  @media screen and ${maxW.md} {
    padding-left: 16px;
  }
`;

const InfoSections = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 240px 300px;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  height: 54px;
  max-height: 100%;
  padding-left: 32px;
  padding-right: 32px;
  border-bottom: 0.5px solid ${theme.lightGrey};
  box-sizing: border-box;

  :last-child {
    border-bottom: none;
  }
  @media screen and ${maxW.lg} {
    grid-template-columns: 240px 240px;

  }
  @media screen and ${maxW.md} {
    padding-left: 16px;
    grid-template-columns: 240px;
  }
`;

const PhotoPlayerRoster = styled.img`
  height: 38px;
  width: 52px;
  border-radius: 50%;
`;

const FirstColumnSection = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

const SecondColumnSection = styled.div` 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 80px;

  @media screen and ${maxW.lg} {
    gap: 20px;
  }
  
  @media screen and ${maxW.md} {
    display: none;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

const NamePosInfo = styled.div`
  display: grid;
  grid-template-rows: 21px 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  height: 42px;
`;

const StyledInfoSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.grey};
`;
