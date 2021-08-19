import React from "react";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import {theme} from "../../assets/theme/theme";
import {pageCountSize} from "../customSelect/components/optionsForSelect";
import {StylesForSelectCount} from "../customSelect/components/styleForSelectCount";
import {CustomSelect} from "../customSelect/customSelect";


export const PaginationComponent = () => {
    return (
        <PaginationComponentStyle>
            <PaginationStyle>
                <Pagination count={3} color="secondary" shape="rounded"/>
            </PaginationStyle>
            <div>
                <CustomSelect
                    menuPlacement="top"
                    isSearchable={false}
                    defaultValue={pageCountSize[0]}
                    styles={StylesForSelectCount}
                    options={pageCountSize}
                />
            </div>
        </PaginationComponentStyle>
    );
};

const PaginationComponentStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const PaginationStyle = styled.div`
  display: flex;

  .MuiPaginationItem-textSecondary.Mui-selected {
    color: ${theme.white};
    background-color: ${theme.red};

    &:hover {
      background-color: ${theme.lightRed};
    }
  }
`;
