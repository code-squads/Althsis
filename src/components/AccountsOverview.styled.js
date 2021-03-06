import styled from "styled-components";

export const BalanceChartCanvas = styled.canvas`
  max-width: 150px;
  margin: auto;
`;
export const FreqTxChartCanvas = styled.canvas`
  max-width: 400px;
  background-color: ${(props) => props.theme.background};
`;

export const ImpText = styled.span`
  font-size: 22px;
  margin: 10px;
`;

export const FrequentTxContainer = styled.div`
  min-width: 470px;
  min-height: 240px;
  margin-left: 50px;
  background-color: "#15ffd4";
  /* border: 0.5px solid black; */
  border-radius: 15px;
  /* box-shadow: 2px 4px 50px ${(props) =>
    props.theme.isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"} ; */
  padding: 14px;
  padding-top: auto;
`;
