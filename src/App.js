import React from 'react'
import { 
  LeftContainer,
  MainContainer,
  Navbar, 
  RightContainer
} from './App.styled';
import AccountsOverview from './components/AccountsOverview';
import { 
  FlexContainer1, 
  FlexContainer2 
} from './LeftContainer.styled';

const App = () => {
  return (
    <>
      <Navbar>

      </Navbar>
      <MainContainer>
        <LeftContainer>
          <FlexContainer1>
            <AccountsOverview />
          </FlexContainer1>
          <FlexContainer2>

          </FlexContainer2>
        </LeftContainer>
        <RightContainer>

        </RightContainer>
      </MainContainer>
      
    </>
    
  )
}

export default App;
