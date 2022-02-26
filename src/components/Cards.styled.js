import styled from "styled-components";

export const CardContainer = styled.div`
  padding-top: 10%;
  display: grid;
  grid-template-columns: repeat(2, 44%);
  grid-auto-rows: 160px;
  grid-gap: 4%;
  justify-content: center;
  overflow-y: scroll;
  overflow-y: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;
export const Card = styled.div`
  height: 162px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#4285F4"};
  box-shadow: 0px 0px 24px rgba(165, 165, 165, 0.35);
  border-radius: 24px;
  padding-left: 19px;
  color: white;
  cursor: pointer;
`;
export const CardFlex1 = styled.div`
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
export const CardFlex2 = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: white;
  margin-top: 23px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;
export const CardFlex3 = styled.div`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  margin-top: 24px;
`;
export const CardFlex4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  padding-right: 15px;
`;
export const AccountHolderName = styled.div`
  width: 48%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Balance = styled.div`
  width: 52%;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 23px;
  margin-top: -3px;
  text-align: right;
`;
