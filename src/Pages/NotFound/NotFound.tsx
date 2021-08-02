import React from 'react';
import styled from "styled-components";
import NotFoundImg from "../../assets/img/notFound.svg";
import {maxW, theme} from '../../Common/GlobalStyle';

const NotFound = () => {
    return (
        <NotFoundStyle>
            <ImageStyle>
                <img src={NotFoundImg} alt="Picture"/>
            </ImageStyle>
            <div>
                <p>Page not found</p>
                <span>Sorry, we can’t find what you’re looking for</span>
            </div>
        </NotFoundStyle>
    );
};
export default NotFound;

const NotFoundStyle = styled.div`
  display: grid;
  height: 100vh;
  padding: 0 45px 0 45px;
  justify-content: center;
  align-content: center;
  
  img {
    display: grid;
    max-width: 100%;
  }

  p {
    display: grid;
    padding-top: 12px;
    justify-content: center;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 49px;
    color:  ${theme.lightestRed};
  }

  span {
    display: grid;
    justify-content: center;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 33px;
    color: ${theme.grey};
  }
  @media (max-width: ${maxW.sm}) {
    text-align: center;
    p {
      font-size: 17px;
      line-height: 25px;  
    }
    span {
      font-size: 15px;
      line-height: 24px;
    }
  }
`;

const ImageStyle = styled.div`
  display: grid;
  justify-content: center;    
`;
