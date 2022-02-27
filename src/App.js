import React, { useContext, useState } from "react";

import { LeftContainer, MainContainer, RightContainer } from "./App.styled";
import AccountsOverview from "./components/AccountsOverview";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards.js";
import { FlexContainer1, FlexContainer2 } from "./LeftContainer.styled";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

import "./colors.css";
import "./App.css";
import DetailedAccount from "./components/DetailedAccount";

const App = () => {
  const theme = useContext(ThemeContext);
  const [showDetailedAccount, setShowDetailedAccount] = useState(false);

  return (
    <div className="App">
      <ThemeProvider>
        <Navbar />
        <MainContainer>
          <LeftContainer>
            <FlexContainer1>
              <AccountsOverview />
            </FlexContainer1>
            <FlexContainer2></FlexContainer2>
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
      </ThemeProvider>
    </div>
  );
};

export default App;
