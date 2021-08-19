import React, { useEffect } from "react";
import styled from "styled-components";
import {Sidebar} from "../../../ui/sidebar/sidebar";
import {Header} from "../../../ui/header/header";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { maxW, theme } from "../../../assets/theme/theme";
import editIcon from "../../../assets/icon/edit.svg";
import deleteIcon from "../../../assets/icon/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeam, getTeam } from "../../../modules/teams/teamsThunk";
import { AppStateType } from "../../../core/redux/rootReducer";
import swal from "sweetalert";
import { teamForUpdate } from "../../../modules/teams/teamsSlice";
import { getPlayers } from "../../../modules/players/playersThunk";
import { Roster } from "./components/roster";

export const DetailsTeam = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { team } = useSelector((state: AppStateType) => state.teams);
  const { id, name, division, conference, foundationYear, imageUrl } : any =
    team || "";
  const { teamID } = useParams<{ teamID: string }>();

  const [page, setPage] = React.useState(1);
  const handleChange = () => {
    setPage(10);
  };

  useEffect(() => {
    dispatch(getTeam({ id: +teamID }));
    dispatch(getPlayers());
  }, [teamID, dispatch]);

  const onDeleteTeam = async () => {
    await dispatch(deleteTeam({ id }));
    swal("Команда удалена!", "", "success");
    history.push("/teams");
  };

  const onUpdateTeam = () => {
    dispatch(teamForUpdate());
    history.push("/addUpdateTeam");
  };

  return (
    <GlobalGrid>
      <Header />
      <SidebarAndContent>
        <Sidebar />

        <TeamsContent>
          <TeamInfoSection>
            <TitleEditDelete>
              <DetailsTitle>
                <NavLink style={{ textDecoration: "none" }} to="/Teams">
                  <RedTitle>Teams</RedTitle>
                </NavLink>
                <StyledSlash>/</StyledSlash>
                <RedTitle>{name}</RedTitle>
              </DetailsTitle>

              <EditDelete>
                <img
                  onClick={onUpdateTeam}
                  style={{ cursor: "pointer" }}
                  src={editIcon}
                  alt="Edit"
                />
                <img
                  onClick={onDeleteTeam}
                  style={{ cursor: "pointer" }}
                  src={deleteIcon}
                  alt="Delete"
                />
              </EditDelete>
            </TitleEditDelete>

            <TeamInfo>
              <PhotoToDetailsDiv>
                <DetailsTeamPhoto
                  src={`http://dev.trainee.dex-it.ru${imageUrl}`}
                  alt="TeamPhoto"
                />
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
          </TeamInfoSection>

          <Roster id={id} />
        </TeamsContent>
      </SidebarAndContent>
    </GlobalGrid>
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

const TeamsContent = styled.div`
  display: grid;
  padding: 32px 80px;
  grid-template-rows: min-content;
  row-gap: 24px;
  background: ${theme.lightestGrey1};

  @media screen and ${maxW.lg} {
    row-gap: 16px;
    padding: 16px 12px;
  }

  @media screen and ${maxW.md} {
    padding: 16px 0;
    row-gap: 16px;
  }
`;

const TeamInfoSection = styled.div`
  display: grid;
`;

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

  @media screen and ${maxW.xl} {
    grid-template-columns: auto;
    justify-content: center;

    height: max-content;
    padding-bottom: 48px;
  }
  @media screen and ${maxW.md} {
    border-radius: 0;
    padding-bottom: 38px;
    grid-template-rows: repeat(2, auto);
  }
`;

const PhotoToDetailsDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and ${maxW.md} {
    justify-content: center;
  }
`;

const DetailsTeamPhoto = styled.img`
  width: 210px;

  @media screen and ${maxW.xl} {
    padding: 48px 0 48px 0;
  }

  @media screen and ${maxW.md} {
    width: 89px;
  }
`;

const InfoToDetails = styled.div`
  display: grid;
  grid-template-rows: 49px 58px 58px;
  grid-gap: 40px 54px;
  align-content: center;

  @media screen and ${maxW.xl} {
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

  @media screen and ${maxW.md} {
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

  @media screen and ${maxW.xl} {
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

const TitleEditDelete = styled.div`
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

const DetailsTitle = styled.div`
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
const RedTitle = styled.p`
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
const EditDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 32px;
  column-gap: 21px;
`;
const MainTitle = styled.div`
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
const SecondaryTitle = styled.div`
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
