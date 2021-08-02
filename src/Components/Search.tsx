import React from 'react';
import styled from "styled-components";
import {theme} from '../Common/GlobalStyle';

const Search = () => {
    return (
        <SearchStyle>
            <input type="search" placeholder="Search..."/>
        </SearchStyle>
    );
};

export default Search;

const SearchStyle = styled.div`

  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 2;
    top: 13px;
    right: 30px;
    width: 16px;
    height: 16px;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="%23d1d1d1" d="M10.1244 9.64771H10.651L13.4777 12.4877C13.751 12.761 13.751 13.2077 13.4777 13.481C13.2044 13.7544 12.7577 13.7544 12.4844 13.481L9.65104 10.6477V10.121L9.47104 9.93438C8.5377 10.7344 7.26437 11.1477 5.91104 10.921C4.0577 10.6077 2.5777 9.06105 2.35104 7.19438C2.00437 4.37438 4.3777 2.00105 7.1977 2.34772C9.06437 2.57438 10.611 4.05438 10.9244 5.90771C11.151 7.26105 10.7377 8.53438 9.93771 9.46771L10.1244 9.64771ZM3.65104 6.64772C3.65104 8.30772 4.99104 9.64772 6.65104 9.64772C8.31104 9.64772 9.65104 8.30772 9.65104 6.64772C9.65104 4.98772 8.31104 3.64772 6.65104 3.64772C4.99104 3.64772 3.65104 4.98772 3.65104 6.64772Z"/></svg>');
  }

  input {
    position: relative;
    max-width: 100%;
    width: 364px;
    height: 40px;
    font-size: 14px;
    background: ${theme.white};
    padding-left: 12px;
    padding-right: 30px;
    margin-right: 22px;
    border: 0.5px solid ${theme.lightestGrey};
    box-sizing: border-box;
    border-radius: 4px;

    &:active {
      cursor: pointer;
    }

    &:hover {
      background-color: ${theme.lightestGrey};

    }

    &:focus {
      outline: none;
    }
  }
  @media screen and (max-width: 1172px) {
    

 
    

  }
  
  
  
  @media screen and (max-width: 513px) {
    justify-content: center;
    width: 100%;
    
    &:before {     
      right: 12px;
     
    }
    input {
      width: 100%;
     
      margin-right: 0;
    }
  }


`;