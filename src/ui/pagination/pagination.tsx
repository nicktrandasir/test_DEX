import React from "react";
import ReactPaginate from "react-paginate";
import Previous from "./../../assets/icon/previous.svg";
import Next from "./../../assets/icon/next.svg";
import { CustomSelect } from "../customSelect/customSelect";
import { pageCountSize } from "../customSelect/components/optionsForSelect";
import styled from "styled-components";
import { theme } from "../../assets/theme/theme";
import { FC } from "react";

interface IProps {
  itemsCount: number;
  currentPage: number;
  pageSize: number;
  onPageChanged: (selected: any) => void;
  pageSizeChange?: (value: any) => void;
}

export const PaginationComponent: FC<IProps> = ({
  itemsCount,
  currentPage,
  pageSize,
  onPageChanged,
  pageSizeChange,
}) => {



  return (
    <PaginationComponentStyle>
      <StyledPaginateBlock>
        <ReactPaginate
          previousLabel={<img src={Previous} alt="Previous" />}
          nextLabel={<img src={Next} alt="Next" />}
          activeClassName="active"
          containerClassName="pagination"
          forcePage={currentPage ? currentPage - 1 : 0}
          onPageChange={onPageChanged}
          pageCount={itemsCount / pageSize}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
        />
      </StyledPaginateBlock>

      <PageSize>
        <CustomSelect
          pageCount
          menuPlacement="top"
          isSearchable={false}
          onChange={pageSizeChange}
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
  list-style: none;
`;

const StyledPaginateBlock = styled.div`
  display: flex;
  cursor: pointer;

  .pagination {
    padding: 0;
    margin: 0;
    height: 40px;
  }

  .pagination > li {
    display: inline-block;
    padding-left: 0;
    margin: 0 5px 0 5px;
  }
  .pagination > li.active {
    list-style: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    position: relative;
    display: flex;
    color: ${theme.grey};
    float: left;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 24px;
  }

  .pagination > li.active > a {
    color: ${theme.white};
    background-color: ${theme.red};
    border-radius: 4px;
  }

  .pagination > li > a:hover {
    background-color: ${theme.lightestRed};
    border-radius: 4px;
    color: ${theme.white};
  }
  .pagination > li > a:active {
    background-color: ${theme.darkRed};
    border-radius: 4px;
    color: ${theme.white};
  }
`;

const PageSize = styled.div`
  width: 88px;
`;
