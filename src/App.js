import React, { useContext } from "react";

import { LeftContainer, MainContainer, RightContainer } from "./App.styled";
import AccountsOverview from "./components/AccountsOverview";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards.js";
import { FlexContainer1, FlexContainer2 } from "./LeftContainer.styled";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import LoanView from "./components/LoanView";
import "./colors.css";
import "./App.css";

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeProvider>
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
            <Cards></Cards>
          </RightContainer>
        </MainContainer>
      </ThemeProvider>
    </div>
  );
};

export default App;
