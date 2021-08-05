import React from 'react';
import styled from 'styled-components';
import Pagination from "@material-ui/lab/Pagination";
import { theme } from '../../assets/theme/theme';
import Select from "react-select";
import {pageCountSize} from "../../сommon/optionsForSelect";
import {StylesForSelectCount} from "../../assets/theme/styleForSelectCount";

const PaginationComponent = () => {
    return (
        <PaginationComponentStyle>
            <PaginationStyle>
                <Pagination count={3} color="secondary" shape="rounded" />
            </PaginationStyle>

            <div>
                <Select menuPlacement="top"
                        isSearchable={false}
                        defaultValue={pageCountSize[0]}
                        styles={StylesForSelectCount}
                        options={pageCountSize}/>
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
 
`;

