import React, {useEffect} from "react";
import styled from "styled-components";
import {Sidebar} from "../../../ui/sidebar/sidebar";
import {Header} from "../../../ui/header/header";
import {NavLink, useHistory, useParams} from "react-router-dom";
import {maxW, theme} from "../../../assets/theme/theme";
import editIcon from "../../../assets/icon/edit.svg";
import deleteIcon from "../../../assets/icon/delete.svg";
import {deletePlayer, getPlayer} from "../../../modules/players/playersThunk";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../core/redux/rootReducer";
import {playerForUpdate} from "../../../modules/players/playersSlice";

export const DetailsPlayer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {player} = useSelector((state: AppStateType) => state.players);
    const {
        id,
        name,
        number,
        position,
        teamName,
        birthday,
        height,
        weight,
        avatarUrl,
    }: any = player || "";

    const getAge = (birthDate: number) =>
        //@ts-ignore
        Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
    const age = getAge(birthday);

    const {playerID} = useParams<{ playerID: string }>();
    const [page, setPage] = React.useState(1);
    const handleChange = () => {
        setPage(10);
    };

    useEffect(() => {
        dispatch(getPlayer({id: +playerID}));
    }, [playerID, dispatch]);

    const onDeletePlayer = async () => {
        await dispatch(deletePlayer({id}));
        history.push("/Players");
    };
    const onUpdatePlayer = async () => {
        await dispatch(playerForUpdate());
        history.push("/addUpdatePlayer");
    };

    return (
        <GlobalGrid>
            <Header/>
            <SidebarAndContent>
                <Sidebar/>

                <PlayersContent>
                    <TitleEditDelete>
                        <DetailsTitle>
                            <NavLink style={{textDecoration: "none"}} to="/Players">
                                <RedTitle>Players</RedTitle>
                            </NavLink>
                            <StyledSlash>/</StyledSlash>
                            <RedTitle>{name}</RedTitle>
                        </DetailsTitle>

                        <EditDelete>
                            <img
                                onClick={onUpdatePlayer}
                                src={editIcon}
                                style={{cursor: "pointer"}}
                                alt="Edit"
                            />
                            <img
                                onClick={onDeletePlayer}
                                src={deleteIcon}
                                style={{cursor: "pointer"}}
                                alt="Delete"
                            />
                        </EditDelete>
                    </TitleEditDelete>

                    <PlayerInfo>
                        <PhotoToDetails>
                            <DetailsPlayerPhoto
                                src={`http://dev.trainee.dex-it.ru${avatarUrl}`}
                                alt="SomePhoto"
                            />
                        </PhotoToDetails>

                        <InfoToDetails>
                            <NameAndNumber>
                                <p>
                                    {" "}
                                    {name}{" "}
                                    <span style={{color: `${theme.lightRed}`}}>#{number}</span>
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
                                        <SecondaryTitle>{age}</SecondaryTitle>
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
                </PlayersContent>
            </SidebarAndContent>
        </GlobalGrid>
    );
};

export const GlobalGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;

  @media screen and ${maxW.md} {
    grid-template-rows: 62px auto;
  }
`;

export const SidebarAndContent = styled.div`
  display: grid;
  grid-template-columns: 140px auto;
  min-height: calc(100vh - 80px);
  background: ${theme.lightestGrey1};
  margin-top: 80px;

  @media screen and ${maxW.md} {
    grid-template-columns: 0 100%;
    min-height: calc(100vh - 62px);
    margin-top: 62px;
  }
`;

const PlayersContent = styled.div`
  display: grid;
  padding: 32px 80px;
  background: ${theme.lightestGrey1};
  grid-template-rows: 69px 525px;

  @media screen and ${maxW.xl} {
    padding: 32px 32px;
  }

  @media screen and ${maxW.md} {
    padding: 16px 0;
    grid-template-rows: 48px auto;
  }
`;

const PlayerInfo = styled.div`
  display: grid;
  background: linear-gradient(276.45deg,
  ${theme.darkGrey1} 0%,
  ${theme.grey} 100.28%);
  border-radius: 0 0 10px 10px;
  grid-template-columns: auto auto;

  @media screen and ${maxW.xl} {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
    border-radius: 0;
    height: max-content;
  }
`;

const PhotoToDetails = styled.div`
  display: grid;
  align-items: end;

  @media screen and ${maxW.md} {
    justify-content: center;
  }
`;

const DetailsPlayerPhoto = styled.img`
  width: 531px;

  @media screen and ${maxW.md} {
    width: 143px;
    height: 112px;
    padding: 48px 0 48px 0;
  }
`;

const InfoToDetails = styled.div`
  display: grid;

  @media screen and ${maxW.xl} {
    text-align: center;
  }
`;

const DivForDetails = styled.div`
  display: grid;
  grid-template-columns: 184px 185px;
  grid-gap: 128px;

  @media screen and ${maxW.xl} {
    grid-template-columns: auto;
    grid-gap: 54px;
  }
  @media screen and ${maxW.md} {
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

  @media screen and ${maxW.md} {
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

  @media screen and ${maxW.md} {
    grid-gap: 32px;
  }
`;

const SecondColumn = styled.div`
  display: grid;
  grid-template-rows: 60px 60px;
  grid-gap: 54px;
  @media screen and ${maxW.md} {
    grid-gap: 32px;
  }
`;

export const TitleEditDelete = styled.div`
  height: 69px;
  background: ${theme.white};
  border: 0.5px solid ${theme.lightGrey};
  border-radius: 10px 10px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and ${maxW.xl} {
    grid-template-columns: auto auto;
  }
  @media screen and ${maxW.md} {
    border-radius: 0;
    height: 48px;
  }
`;

export const DetailsTitle = styled.div`
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

export const RedTitle = styled.p`
  color: ${theme.red};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  @media screen and ${maxW.lg} {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }
`;

export const EditDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 32px;
  column-gap: 21px;
`;

export const MainTitle = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  color: ${theme.white};
  padding-bottom: 8px;

  @media screen and ${maxW.md} {
    font-weight: 800;
    font-size: 17px;
    line-height: 25px;
  }
`;
export const SecondaryTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.white};

  @media screen and ${maxW.md} {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }
`;
