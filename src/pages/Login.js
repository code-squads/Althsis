import React, { useState } from "react";
import { useAuth } from "../context/authorisation";
import { createConsent, createSession } from "../apis/setu";
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
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [sendingRequest, setSendingRequest] = useState(false);

  const onLoginHandler = async () => {
    setSendingRequest(true);
    await createConsent(number)
      .then((result) => {
        console.log(result);
        localStorage.setItem("consentId", result.data.id);
        localStorage.setItem("url", result.data.url);
        window.open(result.data.url, "_self");
        setSendingRequest(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <NameInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <MobileLabel>Mobile*</MobileLabel>
        <MobileInput
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <LoginButton onClick={onLoginHandler}>
          {sendingRequest ? "logging in.." : "Login"}
        </LoginButton>
        <Note>Note : Select all your bank accounts for detailed analysis</Note>
      </RightContainer>
    </Container>
  );
};

export default Login;
