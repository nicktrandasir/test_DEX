import React from 'react';
import Button from '../../Components/Button';
import Search from '../../Components/Search';
import PaginationComponent from "../../Components/Pagination";
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import TeamsEmpty from './../../assets/img/TeamsEmpty.svg'
import {
    CardEmpty,
    Content, ContentRow, FirstRow,
    GlobalGrid,
    SidebarAndContent,
    ThirdRow
} from "../../Common/GlobalStyle";
import {useDispatch} from "react-redux";

const TeamsContainer = () => {
    const dispatch = useDispatch();




    const [page, setPage] = React.useState(1);
    const handleChange = () => {
        setPage(6);
    };




    return (

            <GlobalGrid>
                <Header/>
                <SidebarAndContent>
                    <Sidebar/>
                    <Content className="teams">
                        <FirstRow>
                            <Search/>
                            <Button border="none"
                                    color="#FFFFFF"
                                    backgroundColor="#E4163A"

                                    width="104px"
                                    children="Add +"
                                    type="submit"
                                    hover="#FF5761"
                                    activeColor="#C60E2E"
                            />
                        </FirstRow>

                        <ContentRow>

                                <CardEmpty>
                                    <img className="teams" src={TeamsEmpty} alt="Picture"/>
                                    <p className="h3">Empty here</p>
                                    <p>Add new teams to continue</p>
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
export default TeamsContainer;



