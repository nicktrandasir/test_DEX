import React from "react";
import styled from "styled-components";
import NotFoundImg from "../../assets/img/notFound.svg";
import { maxW, theme } from "../../assets/theme/theme";

export const NotFound = () => {
  return (
    <NotFoundStyle>
      <ImageStyle>
        <Image src={NotFoundImg} alt="Not Found" />
      </ImageStyle>
      <div>
        <Title>Page not found</Title>
        <SecondTitle>Sorry, we can’t find what you’re looking for</SecondTitle>
      </div>
    </NotFoundStyle>
  );
};

const NotFoundStyle = styled.div`
  display: grid;
  height: 100vh;
  padding: 0 45px 0 45px;
  justify-content: center;
  align-content: center;

  @media screen and (${maxW.sm}) {
    text-align: center;
  }
`;

const Title = styled.p`
  display: grid;
  padding-top: 12px;
  justify-content: center;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  color: ${theme.lightestRed};

  @media screen and (${maxW.sm}) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const SecondTitle = styled.span`
  display: grid;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  color: ${theme.grey};

  @media screen and (${maxW.sm}) {
    font-size: 15px;
    line-height: 24px;
  }
`;

const ImageStyle = styled.div`
  display: grid;
  justify-content: center;
`;

const Image = styled.img`
  display: grid;
  max-width: 100%;
`;
