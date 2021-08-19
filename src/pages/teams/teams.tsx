import React, { useEffect } from "react";
import {Button} from "../../ui/button/button";
import {Search} from "../../ui/search/search";
import { PaginationComponent } from "../../ui/pagination/pagination";
import {Sidebar} from "../../ui/sidebar/sidebar";
import {Header} from "../../ui/header/header";
import { useHistory } from "react-router-dom";
import TeamsEmpty from "./../../assets/img/TeamsEmpty.svg";
import { maxW, theme } from "../../assets/theme/theme";
import { CardTeams } from "./cardTeams/cardTeams";
import { PrivateRoute } from "../../сommon/privateRouter";
import { useDispatch, useSelector } from "react-redux";
import { getTeams } from "../../modules/teams/teamsThunk";
import styled from "styled-components";
import { AppStateType } from "../../core/redux/rootReducer";
import { clearUpdatedTeam } from "../../modules/teams/teamsSlice";

export const Teams = () => {
  const { teams } = useSelector((state: AppStateType) => state.teams);
  const dispatch = useDispatch();

  const history = useHistory();
  const onAddTeam = () => {
    dispatch(clearUpdatedTeam());
    history.push("/addUpdateTeam");
  };

  const [page, setPage] = React.useState(1);
  const handleChange = () => {
    setPage(6);
  };

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <PrivateRoute>
      <GlobalGrid>
        <Header />
        <SidebarAndContent>
          <Sidebar />
          <Content>
            <FirstRow>
              <Search />
              <Button name="Add +" red onClick={onAddTeam} />
            </FirstRow>

            {teams && teams.length !== 0 ? (
              <div>
                <CardTeams />
              </div>
            ) : (
              <div style={{ display: "grid" }}>
                <CardEmpty>
                  <CardEmptyImg
                    className="teams"
                    src={TeamsEmpty}
                    alt="Picture"
                  />
                  <CardEmptyP className="h3">Empty here</CardEmptyP>
                  <CardEmptyP>Add new teams to continue</CardEmptyP>
                </CardEmpty>
              </div>
            )}

            <ThirdRow>
              <PaginationComponent />
            </ThirdRow>
          </Content>
        </SidebarAndContent>
      </GlobalGrid>
    </PrivateRoute>
  );
};

const GlobalGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;

  @media screen and ${maxW.md} {
    grid-template-rows: 62px auto;
  }
`;

const SidebarAndContent = styled.div`
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
const Content = styled.div`
  display: grid;
  padding: 32px 80px;
  background: ${theme.lightestGrey1};
  grid-template-rows: 40px auto 40px;
  grid-gap: 32px;

  @media screen and ${maxW.lg} {
    row-gap: 16px;
    padding: 16px 12px;
  }

  @media screen and ${maxW.ssm} {
    grid-template-rows: 96px auto auto;
  }
`;
const FirstRow = styled.div`
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

const ThirdRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and ${maxW.ssm} {
    align-items: flex-end;
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
    width: 339px;
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
