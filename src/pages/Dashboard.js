import React, { useState, useEffect, useContext } from "react";

import AccountsOverview from "../components/AccountsOverview";
import LoanView from "../components/LoanView";
import Cards from "../components/Cards";
import DetailedAccount from "../components/DetailedAccount";
import Navbar from "../components/Navbar";

import { ThemeContext } from "styled-components";

import { FlexContainer1, FlexContainer2 } from "../LeftContainer.styled";
import { MainContainer, LeftContainer, RightContainer } from "../App.styled";

const Dashboard = () => {
  const theme = useContext(ThemeContext);
  const [showDetailedAccount, setShowDetailedAccount] = useState(false);

  return (
    <>
      <Navbar />
      <MainContainer>
        <LeftContainer>
          <FlexContainer1>
            <AccountsOverview />
          </FlexContainer1>
          <FlexContainer2>
            <LoanView></LoanView>
          </FlexContainer2>
        </LeftContainer>
        <RightContainer>
          {!showDetailedAccount && (
            <Cards setShowDetailedAccount={setShowDetailedAccount} />
          )}
          {showDetailedAccount && (
            <DetailedAccount
              account={showDetailedAccount}
              setShowDetailedAccount={setShowDetailedAccount}
            />
          )}
        </RightContainer>
      </MainContainer>
    </>
  );
};

export default Dashboard;
