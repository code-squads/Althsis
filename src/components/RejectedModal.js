import React from "react";
import { useHistory } from "react-router-dom"
import styled from "styled-components";

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.4);
  z-index: 2;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 289px;
  height: 259px;
  background-color: white;
  border-radius: 20px;
`;
const Success = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #404040;
  margin-top: 16px;
`;
const ConsentStatus = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #606060;
  margin-top: 2px;
`;
const GoToDashboardButton = styled.button`
  width: 160px;
  height: 36px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #404040;
  border: none;
  outline: none;
  margin-top: 48px;
  background: #ebcf3d;
  border-radius: 10px;
`;

const RejectedModal = () => {
  const history = useHistory()

  return (
    <Backdrop>
      <Container>
        <img
          src="./Exclamation.svg"
          style={{ marginTop: "18px", width: "70px" }}
        />
        <Success>Rejected</Success>
        <ConsentStatus>consent status : REJECTED</ConsentStatus>
        <GoToDashboardButton onClick={() => {
          history.push("/login")
          localStorage.setItem('consentId', null)
          localStorage.setItem('url', null)  
        }}>Go to Login</GoToDashboardButton>
      </Container>
    </Backdrop>
  );
};

export default RejectedModal;
