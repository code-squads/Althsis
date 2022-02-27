import React, { useState, useEffect, useContext } from "react";

import AccountsOverview from "../components/AccountsOverview";
import LoanView from "../components/LoanView";
import Cards from "../components/Cards";
import DetailedAccount from "../components/DetailedAccount";
import Navbar from "../components/Navbar";
import { ThemeContext } from "styled-components";
import PendingModal from "../components/PendingModal";
import RejectedModal from "../components/RejectedModal";
import SuccessModal from "../components/SucessModal";

import { FlexContainer1, FlexContainer2 } from "../LeftContainer.styled";
import { MainContainer, LeftContainer, RightContainer } from "../App.styled";
import { createDataSession, getConsent, getData } from "../apis/setu";
import BankData from "../BankData.json";

const Dashboard = () => {
  const theme = useContext(ThemeContext);
  const [showDetailedAccount, setShowDetailedAccount] = useState(false);
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [showRejectedModal, setShowRejectedModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bankData, setBankData] = useState({ Payload: [] });

  useEffect(() => {
    const savedBankData = localStorage.getItem("bankData");
    if (savedBankData) {
      setBankData(JSON.parse(savedBankData));
      return;
    }
    if (localStorage.getItem("consentId")) {
      getConsent(localStorage.getItem("consentId"))
        .then((result) => {
          console.log(result);
          if (result.data.status === "PENDING") {
            setShowPendingModal(true);
          } else if (result.data.status === "REJECTED") {
            setShowRejectedModal(true);
          } else if (result.data.status === "ACTIVE") {
            console.log("active");
            setShowSuccessModal(true);
            createDataSession(localStorage.getItem("consentId"))
              .then((result) => {
                console.log(result.data.id);
                console.log(result);
                localStorage.setItem("bankData", JSON.stringify(BankData));
                setBankData(BankData);

                // getData(result.data.id)
                // .then((result) => {
                //   localStorage.setItem('bankData', JSON.stringify(result.data))
                //   setBankData(result.data)
                // })
                // .catch((error) => {
                //   console.log(error)
                // })
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      {showPendingModal && <PendingModal />}
      {showRejectedModal && <RejectedModal />}
      {showSuccessModal && (
        <SuccessModal setShowSuccessModal={setShowSuccessModal} />
      )}
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
            <Cards
              bankData={bankData}
              setShowDetailedAccount={setShowDetailedAccount}
            />
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
