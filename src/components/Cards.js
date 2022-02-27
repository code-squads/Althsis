import React from "react";
import {
  CardContainer,
  Card,
  CardFlex1,
  CardFlex2,
  CardFlex3,
  CardFlex4,
  Balance,
  AccountHolderName,
} from "./Cards.styled";
import mockData from "../BankData.json";
// mockData.Payload.push(mockData.Payload[0]);
// mockData.Payload.push(mockData.Payload[1]);
// mockData.Payload.push(mockData.Payload[2]);
const COLORS = [
  "rgba(66, 133, 244, 0.8)",
  "rgba(253, 162, 51, 0.8)",
  "rgba(240, 142, 168, 0.8)",
  "rgba(135, 93, 245, 0.8)",
  "rgba(105, 218, 86, 0.8)",
  "rgba(193, 80, 16, 0.8)",
  "rgba(51, 168, 253, 0.8)",
  "rgba(45, 87, 235, 0.8)",
];

const Cards = (props) => {
  let cardCount = -1;
  return (
    <CardContainer>
      {mockData.Payload.map((bank) => {
        return bank.data.map((account, idx) => {
          cardCount++;
          account.bankName = bank.fipID;
          account.accountNumber = account.maskedAccNumber;
          account.accountHolderName =
            account.decryptedFI.account?.profile?.holders?.holder[0]?.name;
          account.accountHolderFirstName =
            account.decryptedFI.account?.profile?.holders?.holder[0]?.name?.split(
              " "
            )[0];
          account.accountHolderLastName =
            account.decryptedFI.account?.profile?.holders?.holder[0]?.name?.split(
              " "
            )[2];
          account.balance =
            account.decryptedFI.account?.transactions?.transaction[
              account.decryptedFI.account?.transactions?.transaction?.length - 1
            ]?.currentBalance?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          account.backgroundColor = COLORS[cardCount];
          return (
            <Card
              backgroundColor={COLORS[cardCount]}
              key={`${account.accountNumber.slice(8)} ${idx}`}
              onClick={() => {
                props.setShowDetailedAccount(account);
              }}
            >
              <CardFlex1>
                <img
                  style={{ marginRight: "10px" }}
                  src="./chip.svg"
                  alt="chip"
                ></img>
                {account.bankName.toUpperCase()}
              </CardFlex1>
              <CardFlex2>
                ** ** ** {account.accountNumber.slice(8)}
              </CardFlex2>
              <CardFlex3>AccountHolder Name</CardFlex3>
              <CardFlex4>
                <AccountHolderName>
                  {account.accountHolderFirstName
                    ? account.accountHolderFirstName
                    : "RUPESH"}{" "}
                  &nbsp;
                  {account.accountHolderLastName
                    ? account.accountHolderLastName
                    : "RAUT"}
                </AccountHolderName>
                <Balance>₹ {account.balance}</Balance>
              </CardFlex4>
            </Card>
          );
        });
      })}
    </CardContainer>
  );
};

export default Cards;