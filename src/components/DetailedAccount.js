import React from "react";
import {
  AccountPancard,
  AccountType,
  Address,
  Card,
  Container,
  CurrentBalance,
  Flex2SubFlex1,
  Flex2SubFlex2,
  Flexbox1,
  Flexbox2,
  Naration,
  Reference,
  TransactionDetailsContainer,
  TransactionFlex,
  TransactionsContainer,
  TransactionSubFlex1,
  TransactionTime,
  TransactionValue,
  TxnId,
  Type,
  TypeOfTransaction,
} from "./DetailedAccount.styled";
import {
  CardFlex2,
  CardFlex3,
  CardFlex4,
  AccountHolderName,
  Balance,
} from "./Cards.styled";
import { useState } from "react";

const DetailedAccount = (props) => {
  const [openTransaction, setOpenTransaction] = useState(false);
  const account = props.account;

  const Last20Transactions = [];
  for (let i = 1; i <= 20; i++) {
    if (
      account.decryptedFI.account.transactions.transaction[
        account.decryptedFI.account.transactions.transaction.length - i
      ]
    )
      Last20Transactions.push(
        account.decryptedFI.account.transactions.transaction[
          account.decryptedFI.account.transactions.transaction.length - i
        ]
      );
  }

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
        {Last20Transactions.map((data) => {
          return (
            <TransactionFlex
              open={data === openTransaction}
              onClick={() => {
                if (openTransaction === data) {
                  setOpenTransaction(null);
                } else {
                  setOpenTransaction(data);
                }
              }}
            >
              <TypeOfTransaction type={data?.type} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <TransactionSubFlex1>
                  <TransactionTime>
                    {data?.transactionTimestamp}
                  </TransactionTime>
                  <TransactionValue>₹ {data?.currentBalance}</TransactionValue>
                </TransactionSubFlex1>
                <TransactionDetailsContainer>
                  <Reference>
                    reference
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    {data?.reference}
                  </Reference>
                  <TxnId>
                    txnId
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    {data?.txnId}
                  </TxnId>
                  <Naration>
                    naration
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    {data?.narration}
                  </Naration>
                  <Type>
                    type
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
                    {data?.type}
                  </Type>
                  <CurrentBalance>
                    currentBalance &nbsp;: ₹ 14,293.00
                  </CurrentBalance>
                </TransactionDetailsContainer>
              </div>
            </TransactionFlex>
          );
        })}
      </TransactionsContainer>
    </Container>
  );
};

export default DetailedAccount;
