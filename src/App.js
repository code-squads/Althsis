import React from 'react'
import { 
  LeftContainer,
  MainContainer,
  Navbar, 
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
  FlexContainer1,
  FlexContainer2
} from './RightContainer.styled';

const App = () => {
  return (
    <>
      <Navbar>

      </Navbar>
      <MainContainer>
        <LeftContainer>
          <FlexContainer1>

          </FlexContainer1>
          <FlexContainer2>

          </FlexContainer2>
        </LeftContainer>
        <RightContainer>
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
    </>
    
  )
}

export default App;
