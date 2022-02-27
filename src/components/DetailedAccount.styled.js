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
`
export const Card = styled.div`
    width: 100%;
    height: 162px;
    background-color: ${props => props.backgroundColor?props.backgroundColor:"rgba(66, 133, 244, 0.8)"};
    border-radius: 24px;
    padding-left: 20px;
    padding-right: 20px;
    color: white;
`
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
`
export const Flexbox2 = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 4px;
    border: solid black 1px;
`
export const Flex2SubFlex1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`
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
`
export const AccountType = styled.div``
export const AccountPancard = styled.div``
export const Address = styled.div``
export const TransactionsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 26px;
    padding-bottom: 90px;
    row-gap: 16px;
    border: solid black 1px;
    overflow-y: auto;
`
export const TransactionFlex = styled.div`
    width: 100%;
    height: 38px;
    border-radius: 24px;
    border: solid #C4C4C4 1px;
`