import React from "react";
import { useAuth } from "../context/authorisation";
import { createSession } from "../apis/setu";
import {
  Container,
  LeftContainer,
  LoginButton,
  MadeFor,
  MobileInput,
  MobileLabel,
  NameInput,
  NameLabel,
  Note,
  RightContainer,
  Slogan,
  WebsiteName,
} from "./Login.styled";

const Login = () => {
  const auth = useAuth();
  
  return (
    <Container>
      <LeftContainer>
        <img
          src="./sprinkles.svg"
          style={{ marginTop: "52px", position: "absolute" }}
        />
        <WebsiteName>Althsis</WebsiteName>
        <Slogan>Analyze your financial wealth</Slogan>
        <img src="./althsisPreview.png" style={{ marginTop: "100px" }} />
      </LeftContainer>
      <RightContainer>
        <MadeFor>Made for</MadeFor>
        <img src="./hackathon.png" style={{ marginTop: "10px" }} />
        <NameLabel>Name*</NameLabel>
        <NameInput />
        <MobileLabel>Mobile*</MobileLabel>
        <MobileInput />
        <LoginButton>Login</LoginButton>
        <Note>Note : Select all your bank accounts for detailed analysis</Note>
      </RightContainer>
    </Container>
  );
};

export default Login;
