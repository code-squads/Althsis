import styled from "styled-components"

export const Navbar = styled.div`
  width: 100%;
  height: 60px;
  background-color: yellow;
`
export const Profile = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  height: fit-content;

  > div {
    display: inline-block;

    &:first-child {
      border: 1px solid black;
      border-radius: 50%;
      width: fit-content;
      padding: 15px;
      float: left;
    }
    &.profileName {
      margin: 15px;
      margin-top: 2px;
      margin-bottom: 2px;
      font-size: 30px;
      height: 100%;
    }
  }
`

export const BalanceChartCanvas = styled.canvas`
  max-width: 200px;  
`

export const ImpText = styled.span`
  font-size: 22px;
  margin: 10px;
`

export const FrequentTxContainer = styled.div`
  min-width: 340px;
  min-height: 200px;
  background-color: "#15ffd4";
  /* border: 0.5px solid black; */
  border-radius: 15px;
  box-shadow: 2px 4px 50px rgba(0, 0, 0, 0.1);
`