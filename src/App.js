import React, { useContext } from 'react'

import { 
  LeftContainer,
  MainContainer,
  RightContainer
} from './App.styled';
import {
  Card,
  CardContainer,
  CardFlex1,
  CardFlex2,
  CardFlex3,
  CardFlex4,
  Balance,
} from './RightContainer.styled';
import AccountsOverview from './components/AccountsOverview';
import Navbar from './components/Navbar';
import { 
  FlexContainer1, 
  FlexContainer2 
} from './LeftContainer.styled';
import { ThemeContext, ThemeProvider } from './context/ThemeContext'

import './colors.css';
import './App.css';

const App = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className='App'>
      <ThemeProvider>
        <Navbar />
        <MainContainer>
          <LeftContainer theme={theme}>
            <FlexContainer1>
              <AccountsOverview />
            </FlexContainer1>
            <FlexContainer2>

            </FlexContainer2>
          </LeftContainer>
          <RightContainer theme={theme}>
            <CardContainer>
              <Card>
                <CardFlex1>
                  <img style={{marginRight: "10px"}} src='./chip.svg'></img>
                  Axis Bank
                </CardFlex1>
                <CardFlex2>
                  **** **** **** 1234
                </CardFlex2>
                <CardFlex3>
                  AccountHolder Name
                </CardFlex3>
                <CardFlex4>
                  Rupesh Raut 
                  <Balance>₹ 87,302.00</Balance>
                </CardFlex4>
              </Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </CardContainer>
          </RightContainer>
        </MainContainer>
      </ThemeProvider>
    </div>
  )
}

export default App;