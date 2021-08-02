import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import {NavLink} from 'react-router-dom';
import {
    DetailsTitle,
    EditDelete,
    GlobalGrid,
    RedTitle,
    SidebarAndContent,
    theme,
    TitleEditDelete,
    MainTitle, SecondaryTitle
} from "../../Common/GlobalStyle";
import editIcon from './../../assets/icon/edit.svg'
import deleteIcon from './../../assets/icon/delete.svg'
import Greg from './../../assets/img/GregWithington.svg'
import TeamPhoto from './../../assets/img/denver.svg'





const DetailsTeam = () => {


    const [page, setPage] = React.useState(1);
    const handleChange = () => {
        setPage(10);
    };



    return (
        <GlobalGrid>
            <Header/>
            <SidebarAndContent>
                <Sidebar/>

                <TeamsContent>
                    <TeamInfoSection>
                        <TitleEditDelete>
                            <DetailsTitle>
                                <NavLink to="/Teams">
                                    <RedTitle>Teams</RedTitle>
                                </NavLink>
                                <div>/</div>
                                <RedTitle>Details Team</RedTitle>
                            </DetailsTitle>

                            <EditDelete>
                                <img src={editIcon} alt="Edit"/>
                                <img src={deleteIcon} alt="Delete"/>
                            </EditDelete>
                        </TitleEditDelete>

                        <TeamInfo>
                            <PhotoToDetails>
                                <img src={TeamPhoto} alt="TeamPhoto"/>
                            </PhotoToDetails>

                            <InfoToDetails>
                                <NameTeam>Bears</NameTeam>
                                <YearAndDivision>
                                    <div>
                                        <MainTitle> Year of foundation</MainTitle>
                                        <SecondaryTitle>1990</SecondaryTitle>
                                    </div>
                                    <div>
                                        <MainTitle>Division</MainTitle>
                                        <SecondaryTitle>Stars</SecondaryTitle>
                                    </div>
                                </YearAndDivision>
                                <NameConference>
                                    <MainTitle>Conference</MainTitle>
                                    <SecondaryTitle>West</SecondaryTitle>
                                </NameConference>
                            </InfoToDetails>
                        </TeamInfo>
                    </TeamInfoSection>

                    <TeamPlayersInfo>
                        <RosterSection>Roster</RosterSection>
                        <InfoSections style={{height: '40px'}}>
                            <FirstColumnSection>
                                <div>#</div>
                                <PlayerInfo>Player</PlayerInfo>
                            </FirstColumnSection>
                            <SecondColumnSection>
                                <div>Height</div>
                                <div>Weight</div>
                                <div>Age</div>
                            </SecondColumnSection>
                        </InfoSections>

                        <InfoSections>
                            <FirstColumnSection>
                                <div>10</div>
                                <PlayerInfo>
                                    <img src={Greg} alt="miniPhoto"/>
                                    <NamePosInfo>
                                        <span>Greg Welinghton</span>
                                        <span style={{color: `${theme.lightGrey}`, fontSize: '12px'}}>Defender</span>
                                    </NamePosInfo>
                                </PlayerInfo>
                            </FirstColumnSection>

                            <SecondColumnSection>
                                <div>207 cm</div>
                                <div>95 kg</div>
                                <div>27</div>
                            </SecondColumnSection>
                        </InfoSections>
                        <InfoSections>
                            <FirstColumnSection>
                                <div>10</div>
                                <PlayerInfo>
                                    <img src={Greg} alt="miniPhoto"/>
                                    <NamePosInfo>
                                        <span>Greg Welinghton</span>
                                        <span style={{color: `${theme.lightGrey}`, fontSize: '12px'}}>Defender</span>
                                    </NamePosInfo>
                                </PlayerInfo>
                            </FirstColumnSection>

                            <SecondColumnSection>
                                <div>207 cm</div>
                                <div>95 kg</div>
                                <div>27</div>
                            </SecondColumnSection>
                        </InfoSections>
                        <InfoSections>
                            <FirstColumnSection>
                                <div>10</div>
                                <PlayerInfo>
                                    <img src={Greg} alt="miniPhoto"/>
                                    <NamePosInfo>
                                        <span>Greg Welinghton</span>
                                        <span style={{color: `${theme.lightGrey}`, fontSize: '12px'}}>Defender</span>
                                    </NamePosInfo>
                                </PlayerInfo>
                            </FirstColumnSection>

                            <SecondColumnSection>
                                <div>207 cm</div>
                                <div>95 kg</div>
                                <div>27</div>
                            </SecondColumnSection>
                        </InfoSections>
                        <InfoSections>
                            <FirstColumnSection>
                                <div>10</div>
                                <PlayerInfo>
                                    <img src={Greg} alt="miniPhoto"/>
                                    <NamePosInfo>
                                        <span>Greg Welinghton</span>
                                        <span style={{color: `${theme.lightGrey}`, fontSize: '12px'}}>Defender</span>
                                    </NamePosInfo>
                                </PlayerInfo>
                            </FirstColumnSection>

                            <SecondColumnSection>
                                <div>207 cm</div>
                                <div>95 kg</div>
                                <div>27</div>
                            </SecondColumnSection>
                        </InfoSections>
                        <InfoSections>
                            <FirstColumnSection>
                                <div>10</div>
                                <PlayerInfo>
                                    <img src={Greg} alt="miniPhoto"/>
                                    <NamePosInfo>
                                        <span>Greg Welinghton</span>
                                        <span style={{color: `${theme.lightGrey}`, fontSize: '12px'}}>Defender</span>
                                    </NamePosInfo>
                                </PlayerInfo>
                            </FirstColumnSection>

                            <SecondColumnSection>
                                <div>207 cm</div>
                                <div>95 kg</div>
                                <div>27</div>
                            </SecondColumnSection>
                        </InfoSections>
                        <InfoSections>
                            <FirstColumnSection>
                                <div>10</div>
                                <PlayerInfo>
                                    <img src={Greg} alt="miniPhoto"/>
                                    <NamePosInfo>
                                        <span>Greg Welinghton</span>
                                        <span style={{color: `${theme.lightGrey}`, fontSize: '12px'}}>Defender</span>
                                    </NamePosInfo>
                                </PlayerInfo>
                            </FirstColumnSection>

                            <SecondColumnSection>
                                <div>207 cm</div>
                                <div>95 kg</div>
                                <div>27</div>
                            </SecondColumnSection>
                        </InfoSections>

                    </TeamPlayersInfo>
                </TeamsContent>
            </SidebarAndContent>
        </GlobalGrid>
    );
};

export default DetailsTeam;


const TeamsContent = styled.div`
  display: grid;
  padding: 32px 80px;
  grid-template-rows: min-content;
  row-gap: 24px;
  background: ${theme.lightestGrey1};

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: ${theme.white};
  }

  @media screen and (max-width: 768px) {
    padding: 16px 0;
    row-gap: 16px;
  }
`;

const TeamInfoSection = styled.div`
  display: grid;


`;

const TeamInfo = styled.div`
  display: grid;
  background: linear-gradient(276.45deg,
  ${theme.darkGrey1} 0%,
  ${theme.grey} 100.28%);
  border-radius: 0 0 10px 10px;
  grid-template-columns: auto auto;
  height: 404px;
  max-height: 100%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: auto;
    justify-content: center;

    height: max-content;
    padding-bottom: 48px;
  }
  @media screen and (max-width: 786px) {
    border-radius: 0;
    grid-template-rows: 1fr(3, repeat);
  }
`;

const PhotoToDetails = styled.div`
  display: grid;
 
  justify-content: center;
  align-items: center;
  
  img {
    width: 210px;
  }
  
  @media screen and (max-width: 1200px) {
    img {

      //height: 112px;
      padding: 48px 0 48px 0;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    img {
      width: 89px;
      //height: 112px;
    }
  }

`;


const InfoToDetails = styled.div`
  display: grid;
  grid-template-rows: 49px 58px 58px;
  grid-gap: 40px 54px;
  align-content: center;

  @media screen and (max-width: 1200px) {
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

  @media screen and (max-width: 768px) {
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


  @media screen and (max-width: 1200px) {
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


const TeamPlayersInfo = styled.div`


  border-radius: 10px;
  display: grid;
  grid-template-rows: 54px 40px auto;
  color: ${theme.grey};
  border: 0.5px solid ${theme.lightGrey};
  background: ${theme.white};


  @media screen and (max-width: 786px) {
    border-radius: 0;
    border-left: 0;
    border-right: 0;
  }
`;


const RosterSection = styled.div`
  display: grid;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  padding-left: 32px;
  line-height: 25px;
  border-bottom: 0.5px solid ${theme.lightGrey};
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding-left: 16px;
  }

`;
const InfoSections = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 240px 281px;
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

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    padding-left: 16px;
    grid-template-columns: 240px;
  }
`;

const FirstColumnSection = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;
const SecondColumnSection = styled.div`
  display: flex;
  align-items: center;
  gap: 84px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 16px;
`;

const NamePosInfo = styled.div`
  display: grid;
  grid-template-rows: 21px 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  height: 42px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${theme.grey};
  }
`;


