import React from "react";
import styled from "styled-components";
import {Button} from "../../ui/button/button";
import {Search} from "../../ui/search/search";
import {Sidebar} from "../../ui/sidebar/sidebar";
import {Header} from "../../ui/header/header";
import {useHistory} from "react-router-dom";
import PlayersEmpty from "./../../assets/img/PlayersEmpty.svg";
import {maxW, theme} from "../../assets/theme/theme";
import {StylesForMultiSelect} from "../../ui/customSelect/components/styleForMultiSelect";
import {PrivateRoute} from "../../сommon/privateRouter";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPlayers} from "../../modules/players/playersThunk";
import {CardPlayers} from "./cardPlayers/cardPlayers";
import {getTeams} from "../../modules/teams/teamsThunk";
import {AppStateType} from "../../core/redux/rootReducer";
import {clearUpdatedPlayer} from "../../modules/players/playersSlice";
import {PaginationComponent} from "../../ui/pagination/pagination";
import {CustomSelect} from "../../ui/customSelect/customSelect";

export const Players = () => {
    const {players} = useSelector((state: AppStateType) => state.players);
    const {teams} = useSelector((state: AppStateType) => state.teams);
    const dispatch = useDispatch();
    const history = useHistory();
    const onAddPlayer = () => {
        dispatch(clearUpdatedPlayer());
        history.push("/addUpdatePlayer");
    };

    const [page, setPage] = React.useState(1);
    const handleChange = () => {
        setPage(10);
    };

    useEffect(() => {
        dispatch(getPlayers());
        dispatch(getTeams());
    }, [dispatch]);

    const optionsDivision = teams?.map((team) => {
        return {label: team.name, value: team.id};
    });

    return (
        <PrivateRoute>
            <GlobalGrid>
                <Header/>
                <SidebarAndContent>
                    <Sidebar/>
                    <Content>
                        <FirstRow>
                            <InputsBlock>
                                <Search/>

                                <CustomSelect
                                    isMulti
                                    isClearable
                                    isSearchable={false}
                                    styles={StylesForMultiSelect}
                                    options={optionsDivision}
                                />
                            </InputsBlock>
                            <Button name="Add +" red onClick={onAddPlayer}/>
                        </FirstRow>
                        {players && players.length !== 0 ? (
                            <div>
                                <CardPlayers/>
                            </div>
                        ) : (
                            <div style={{display: "grid"}}>
                                <CardEmpty>
                                    <CardEmptyImg src={PlayersEmpty} alt="Picture"/>
                                    <CardEmptyP className="h3">Empty here</CardEmptyP>
                                    <CardEmptyP>Add new players to continue</CardEmptyP>
                                </CardEmpty>
                            </div>
                        )}

                        <ThirdRow>
                            <PaginationComponent/>
                        </ThirdRow>
                    </Content>
                </SidebarAndContent>
            </GlobalGrid>
        </PrivateRoute>
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

export const Content = styled.div`
  display: grid;
  padding: 32px 80px;
  background: ${theme.lightestGrey1};
  grid-template-rows: 40px auto 40px;
  grid-gap: 32px;

  @media screen and ${maxW.xl} {
    grid-template-rows: 96px auto 40px;
  }

  @media screen and ${maxW.lg} {
    row-gap: 16px;
    padding: 16px 12px;
  }

  @media screen and ${maxW.ssm} {
    grid-template-rows: 152px auto auto;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  height: min-content;

  @media screen and ${maxW.ssm} {
    flex-wrap: wrap;
    height: max-content;

    Button {
      margin-top: 16px;
    }
  }
`;

export const ThirdRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and ${maxW.ssm} {
    align-items: flex-end;
  }
`;

const InputsBlock = styled.div`
  display: flex;
  width: min-content;

  @media screen and ${maxW.xl} {
    flex-wrap: wrap;
    gap: 16px;
  }

  @media screen and ${maxW.ssm} {
    width: 100%;
  }
`;

export const CardEmpty = styled.div`
  background: ${theme.white};
  border-radius: 15px;
  max-width: 556px;
  width: 100%;
  max-height: 570px;
  text-align: center;
  padding: 48px 0;
  margin: auto;

  @media screen and ${maxW.ssm} {
    padding-top: 48px;
    border-radius: 0;
    margin: 0 -12px;
    width: auto;
  }
`;

const CardEmptyImg = styled.img`
  padding-bottom: 48px;

  @media screen and ${maxW.ssm} {
    width: 225px;
  }
`;

const CardEmptyP = styled.p`
  font-size: 24px;
  line-height: 33px;
  color: ${theme.grey};
  margin: 0;

  &.h3 {
    font-weight: 800;
    line-height: 49px;
    font-size: 36px;
    margin-bottom: 24px;
    color: ${theme.lightestRed};
  }

  @media screen and ${maxW.ssm} {
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;

    &.h3 {
      font-style: normal;
      font-weight: 800;
      font-size: 17px;
      line-height: 25px;
      margin-bottom: 45px;
    }
  }
`;
