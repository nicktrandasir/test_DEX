import React from "react";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import { theme } from "../../assets/theme/theme";
import { pageCountSize } from "../customSelect/components/optionsForSelect";
import { CustomSelect } from "../customSelect/customSelect";

export const PaginationComponent = () => {
  return (
    <PaginationComponentStyle>
      <PaginationStyle>
        <Pagination count={3} color="secondary" shape="rounded" />
      </PaginationStyle>
      <PageSize>
        <CustomSelect
          pageCount
          menuPlacement="top"
          isSearchable={false}
          defaultValue={pageCountSize[0]}
          options={pageCountSize}
        />
      </PageSize>
    </PaginationComponentStyle>
  );
};

const PaginationComponentStyle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
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
const PageSize = styled.div`
  width: 88px;
  height: 40px;
`;
