import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { maxW, theme } from "../../../assets/theme/theme";
import { NavLink } from "react-router-dom";
import { AppStateType } from "../../../core/redux/rootReducer";
import { ITeam } from "../../../api/dto/ITeam";

export const CardTeams = () => {
  const { teams } = useSelector((state: AppStateType) => state.teams);

  const allTeams = useMemo(
    () =>
      teams?.map((team: ITeam) => (
        <CardItem>
          <StyledLink to={"/detailsTeam/" + team.id}>
            <TeamPhotoDiv>
              <TeamPhoto
                src={`http://dev.trainee.dex-it.ru${team.imageUrl}`}
                alt="Photo"
              />
            </TeamPhotoDiv>
            <ItemInfo>
              <TeamNameTitle> {team.name} </TeamNameTitle>
              <YearFoundation>
                Year of foundation: <span> {team.foundationYear}</span>{" "}
              </YearFoundation>
            </ItemInfo>
          </StyledLink>
        </CardItem>
      )),
    [teams]
  );

  return <CardItemsStyle>{allTeams}</CardItemsStyle>;
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

  @media screen and ${maxW.ssm} {
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

  @media screen and ${maxW.ssm} {
    height: 80px;
  }
`;

const TeamNameTitle = styled.p`
  font-style: normal;
  color: ${theme.white};
  font-weight: 500;
  font-size: 18px;
  line-height: 0;

  @media screen and ${maxW.ssm} {
    font-size: 15px;
  }
`;

export const CardItemsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  align-items: flex-start;
  background-color: ${theme.lightestGrey1};

  @media screen and ${maxW.md} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }
`;

const YearFoundation = styled.p`
  font-style: normal;
  color: ${theme.lightGrey};
  font-weight: 500;
  font-size: 14px;
  line-height: 0;

  @media screen and ${maxW.ssm} {
    font-size: 13px;
  }
`;

const TeamPhotoDiv = styled.div`
  display: grid;
  justify-content: center;

  @media screen and ${maxW.lg} {
    display: grid;
    justify-content: center;
  }
`;

const TeamPhoto = styled.img`
  width: 150px;
  padding: 64px 0 64px 0;
  max-width: 100%;

  @media screen and ${maxW.ssm} {
    width: 60%;
    padding: 32px 0 32px 0;
    margin: auto;
  }
`;
