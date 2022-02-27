import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10%;
  background-color: transparent;
  padding-left: 4%;
  padding-right: 4%;
`;
export const Card = styled.div`
  width: 100%;
  min-height: 162px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(66, 133, 244, 0.8)"};
  border-radius: 24px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
`;
export const Flexbox1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: white;
  margin-top: 22px;
`;
export const Flexbox2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 4px;
`;
export const Flex2SubFlex1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;
export const Flex2SubFlex2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  row-gap: 8px;
  padding-top: 10px;
  padding-left: 30px;
`;
export const AccountType = styled.div``;
export const AccountPancard = styled.div``;
export const Address = styled.div``;
export const TransactionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  margin-bottom: 90px;
  row-gap: 16px;
  overflow-y: auto;
  ::-webkit-scrollbar{
      display: none;
  }
`;
export const TransactionFlex = styled.div`
    display: flex;
    flex-direction: row;
  width: 100%;
  min-height: 38px;
  min-height: ${props => props.open? 144: 38}px;
  max-height: ${props => props.open? 0: 38}px;
  border-radius: 24px;
  border: ${props => props.open? "1px dashed #c4c4c4": "solid #c4c4c4 1px"};
  -webkit-transition: min-height 400ms ease-in-out;
    -moz-transition: min-height 400ms ease-in-out;
    -o-transition: min-height 400ms ease-in-out;
    transition: min-height 400ms ease-in-out;
    cursor: pointer;
    overflow: hidden;
`;
export const TypeOfTransaction = styled.div`
    width: 28px;
    height: 100%;
    background-color: ${props => props.type === "CREDIT"?'#C3FC23':'#EA665E'};
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
`
export const TransactionSubFlex1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 38px;
    width: 100%;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.5px;
    color: #404040;
`
export const TransactionTime = styled.div`
    margin-left: 22px;
`
export const TransactionValue = styled.div`
    margin-left: auto;
    margin-right: 34px;
`
export const TransactionDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    row-gap: 3px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.5px;
    color: #505050;
    margin-left: 22px;
    padding-right: 10px;
`
export const Reference = styled.div``
export const TxnId = styled.div``
export const Naration = styled.div``
export const Type = styled.div``
export const CurrentBalance = styled.div``
