import React from 'react';
import styled from 'styled-components';
import Pagination from "@material-ui/lab/Pagination";
import { theme } from '../Common/GlobalStyle';
import Select from "react-select";
import {pageSize} from "../Common/OptionsForSelect";
import {StylesForSelectPageSize} from "./StyleForSelectCount";

const PaginationComponent = () => {
    return (
        <PaginationComponentStyle>
            <PaginationStyle>
                <Pagination count={3} color="secondary" shape="rounded" />
            </PaginationStyle>

            <div>
                <Select menuPlacement="top"
                        isSearchable={false}
                        defaultValue={pageSize[0]}
                        styles={StylesForSelectPageSize}
                        options={pageSize}/>
            </div>
        </PaginationComponentStyle>
    );
};

export default PaginationComponent;

const PaginationComponentStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PaginationStyle = styled.div`  
  display: flex;

  .MuiPaginationItem-textSecondary.Mui-selected {
    color:  ${theme.white};
    background-color: ${theme.red};
    &:hover {
      background-color: ${theme.lightRed};
    }
  }
  
  @media screen and (max-width: 520px) {
    
  }
`;

