import React from 'react';
import styled from 'styled-components';
import Button from '../../Components/Button';
import Search from '../../Components/Search';
import PaginationComponent from "../../Components/Pagination";
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import {optionsDivision} from "../../Common/OptionsForSelect";
import {useHistory} from 'react-router-dom';
import Select from "react-select";
import PlayersEmpty from './../../assets/img/PlayersEmpty.svg'

import {
    Content,
    GlobalGrid,
    ThirdRow,
    FirstRow,
    SidebarAndContent,
    ContentRow,
    CardEmpty
} from "../../Common/GlobalStyle";
import {StylesForMultiSelect} from "../../Components/StyleForMultiSelect";


const PlayersContainer = () => {

    const history = useHistory()
    const onAddPlayer = () => {
        history.push("/addPlayer")
    }

    const [page, setPage] = React.useState(1);
    const handleChange = () => {
        setPage(10);
    };


    return (

            <GlobalGrid>
                <Header/>
                <SidebarAndContent>
                    <Sidebar/>
                    <Content className="players">
                        <FirstRow>
                            <InputsBlock>
                                <Search/>
                                <Select
                                    isMulti
                                    isSearchable={false}
                                    styles={StylesForMultiSelect}
                                    isClearable
                                    options={optionsDivision}/>
                            </InputsBlock>
                            <Button border="none"
                                    color="#FFFFFF"
                                    backgroundColor="#E4163A"
                                    onClick={onAddPlayer}
                                    width="104px"
                                    hover="#FF5761"
                                    children="Add +"
                                    activeColor="#C60E2E"
                                    type="submit"/>
                        </FirstRow>

                        <ContentRow>


                            <CardEmpty>
                                    <img className="players" src={PlayersEmpty} alt="Picture"/>
                                    <p className="h3">Empty here</p>
                                    <p>Add new players to continue</p>
                                </CardEmpty>



                        </ContentRow>
                        <ThirdRow>
                            <PaginationComponent/>
                        </ThirdRow>
                    </Content>
                </SidebarAndContent>
            </GlobalGrid>

    );
};
export default PlayersContainer;

const InputsBlock = styled.div`
  display: flex;
  width: min-content;

  @media screen and (max-width: 1172px) {
    flex-wrap: wrap;
    gap: 16px;

  }


  @media screen and (max-width: 513px) {
    width: 100%;


  }
`;



