import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { maxW, theme } from "../../assets/theme/theme";
import {
  deletePlayerThunk,
  getPlayerThunk,
} from "../../modules/players/playersThunk";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../core/redux/rootReducer";
import { playerForUpdate } from "../../modules/players/playersSlice";
import { DetailsLayout } from "../../components/details/detailsLayout";
import { BaseUrl } from "../../api/baseRequest";
import { pathRouts } from "../routes";

export const DetailsPlayer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    id,
    name,
    avatarUrl,
    position,
    weight,
    height,
    number,
    teamName,
    birthday,
  } = useSelector((state: AppStateType) => state.players.player);

  const getAge = (birthDate: number) =>
    Math.floor(
      (new Date().valueOf() - new Date(birthDate).getTime()) / 3.15576e10
    );

  const { playerId } = useParams<{ playerId: string }>();

  useEffect(() => {
    dispatch(getPlayerThunk({ id: +playerId }));
  }, [playerId, dispatch]);

  const onDeletePlayer = async () => {
    await dispatch(deletePlayerThunk({ id }));
    history.push(pathRouts.Players);
  };
  const onUpdatePlayer = async () => {
    await dispatch(playerForUpdate());
    history.push(pathRouts.AddUpdatePlayer);
  };

  return (
    <DetailsLayout
      onUpdateItem={onUpdatePlayer}
      onDeleteItem={onDeletePlayer}
      name={name}
    >
      <PlayerInfo>
        <PhotoToDetails>
          <DetailsPlayerPhoto
            src={`${BaseUrl}${avatarUrl}`}
            alt="Details Photo"
          />
        </PhotoToDetails>

        <InfoToDetails>
          <NameAndNumber>
            <p>
              {name}{" "}
              <span style={{ color: `${theme.lightRed}` }}>#{number}</span>
            </p>
          </NameAndNumber>

          <DivForDetails>
            <FirstColumn>
              <div>
                <MainTitle>Position</MainTitle>
                <SecondaryTitle>{position}</SecondaryTitle>
              </div>
              <div>
                <MainTitle>Height</MainTitle>
                <SecondaryTitle>{height} cm</SecondaryTitle>
              </div>
              <div>
                <MainTitle>Age</MainTitle>
                <SecondaryTitle>{getAge(birthday)}</SecondaryTitle>
              </div>
            </FirstColumn>

            <SecondColumn>
              <div>
                <MainTitle>Team</MainTitle>
                <SecondaryTitle>{teamName}</SecondaryTitle>
              </div>
              <div>
                <MainTitle>Weight</MainTitle>
                <SecondaryTitle>{weight} kg</SecondaryTitle>
              </div>
            </SecondColumn>
          </DivForDetails>
        </InfoToDetails>
      </PlayerInfo>
    </DetailsLayout>
  );
};

const PlayerInfo = styled.div`
  display: grid;
  height: 525px;
  background: linear-gradient(
    276.45deg,
    ${theme.darkGrey1} 0%,
    ${theme.grey} 100.28%
  );
  border-radius: 0 0 10px 10px;
  grid-template-columns: auto auto;

  @media screen and (${maxW.xl}) {
    grid-template-columns: auto;
    padding-bottom: 48px;
    grid-template-rows: auto auto;
    justify-content: center;
    border-radius: 0;
    height: max-content;
  }
`;

const PhotoToDetails = styled.div`
  display: grid;
  align-items: end;

  @media screen and (${maxW.md}) {
    justify-content: center;
  }
`;

const DetailsPlayerPhoto = styled.img`
  width: 531px;
  max-width: 100%;
  padding: 0;

  @media screen and (${maxW.xl}) {
    width: 430px;
    padding: 48px 0 48px 0;
  }

  @media screen and (${maxW.md}) {
    width: 143px;
    height: 112px;
    padding: 48px 0 48px 0;
  }
`;

const InfoToDetails = styled.div`
  display: grid;

  @media screen and (${maxW.xl}) {
    text-align: center;
  }
`;

const DivForDetails = styled.div`
  display: grid;
  grid-template-columns: 184px 185px;
  grid-gap: 128px;

  @media screen and (${maxW.xl}) {
    grid-template-columns: auto;
    grid-gap: 54px;
  }
  @media screen and (${maxW.md}) {
    grid-gap: 32px;
  }
`;

const NameAndNumber = styled.div`
  display: grid;
  align-items: end;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.white};

  @media screen and (${maxW.md}) {
    font-weight: 800;
    font-size: 17px;
    line-height: 25px;
    padding-bottom: 48px;
  }
`;

const FirstColumn = styled.div`
  display: grid;
  grid-template-rows: 60px 60px 60px;
  grid-gap: 54px;

  @media screen and (${maxW.md}) {
    grid-gap: 32px;
  }
`;

const SecondColumn = styled.div`
  display: grid;
  grid-template-rows: 60px 60px;
  grid-gap: 54px;

  @media screen and (${maxW.md}) {
    grid-gap: 32px;
  }
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
