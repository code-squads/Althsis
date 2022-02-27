import React from "react";
import {
  AccountPancard,
  AccountType,
  Address,
  Card,
  Container,
  Flex2SubFlex1,
  Flex2SubFlex2,
  Flexbox1,
  Flexbox2,
  TransactionFlex,
  TransactionsContainer,
} from "./DetailedAccount.styled";
import {
  CardFlex2,
  CardFlex3,
  CardFlex4,
  AccountHolderName,
  Balance,
} from "./Cards.styled";

const DetailedAccount = (props) => {
  const account = props.account;
  return (
    <Container>
      <Card backgroundColor={account.backgroundColor}>
        <Flexbox1>
          <img style={{ marginRight: "10px" }} src="./chip.svg" alt="chip" />
          {account.bankName.toUpperCase()}
          <img
            style={{ marginLeft: "auto", marginRight: "10px" }}
            src="./backArrow.svg"
            alt="backArrow"
            onClick={() => {
              props.setShowDetailedAccount(false);
            }}
          />
        </Flexbox1>
        <Flexbox2>
          <Flex2SubFlex1>
            <CardFlex2>
              **** **** **** {account.accountNumber.slice(8)}
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
          </Flex2SubFlex1>
          <Flex2SubFlex2>
            <AccountType>
              Account Type:&nbsp;
              {account.decryptedFI.account?.profile?.holders?.type}
            </AccountType>
            <AccountPancard>
              Pancard:&nbsp;
              {account.decryptedFI.account?.profile?.holders?.holder[0]?.pan}
            </AccountPancard>
            <Address>
              Address:&nbsp;
              {
                account.decryptedFI.account?.profile?.holders?.holder[0]
                  ?.address
              }
            </Address>
          </Flex2SubFlex2>
        </Flexbox2>
      </Card>
      <TransactionsContainer>
        <TransactionFlex></TransactionFlex>
        <TransactionFlex></TransactionFlex>
        <TransactionFlex></TransactionFlex>
        <TransactionFlex></TransactionFlex>
        <TransactionFlex></TransactionFlex>
        <TransactionFlex></TransactionFlex>
        <TransactionFlex></TransactionFlex>
        <TransactionFlex></TransactionFlex>
      </TransactionsContainer>
    </Container>
  );
};

export default DetailedAccount;
