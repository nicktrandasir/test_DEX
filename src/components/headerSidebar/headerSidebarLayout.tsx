import React from "react";
import { Header } from "../../ui/header/header";
import { Sidebar } from "../../ui/sidebar/sidebar";
import styled from "styled-components";
import { maxW, theme } from "../../assets/theme/theme";
import { FC } from "react";

export const HeaderSidebarLayout: FC = ({ children }) => {
  return (
    <GlobalGrid>
      <Header />
      <SidebarAndContent>
        <Sidebar />
        {children}
      </SidebarAndContent>
    </GlobalGrid>
  );
};

const GlobalGrid = styled.div`
  display: grid;
  grid-template-rows: 80px auto;

  @media screen and (${maxW.md}) {
    grid-template-rows: 62px auto;
  }
`;

const SidebarAndContent = styled.div`
  display: grid;
  grid-template-columns: 140px auto;
  min-height: calc(100vh - 80px);
  background: ${theme.lightestGrey1};
  margin-top: 80px;

  @media screen and (${maxW.md}) {
    grid-template-columns: 0 100%;
    min-height: calc(100vh - 62px);
    margin-top: 62px;
  }
`;
