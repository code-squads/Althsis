import styled from "styled-components";

export const ChartDiv = styled.canvas`
  min-height: 300px;
  max-width: 250px;
  margin-left: 30px;
`;

export const LoanDisplayCard = styled.div`
  min-width: 500px;
  min-height: 300px;
  margin-left: 50px;
  background-color: "#15ffd4";
  border-radius: 15px;
  box-shadow: 2px 4px 50px
    ${(props) =>
      props.theme.isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  padding-left: 12px;
  padding-top: 5px;
`;

export const LoanHeading = styled.div`
  font-family: Inter;
  font-size: 30px;
  font-weight: 450;
`;

export const LoanSubHeading = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 450;
  color: #606060;
`;

export const SlideDiv = styled.div`
  height: 25px;
  width: 200px;
`;
