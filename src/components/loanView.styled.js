import styled from "styled-components";

export const Loan = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const ChartDiv = styled.canvas`
  // min-height: 300px;
  max-width: 250px;
  margin: auto;
`;

export const LoanDisplayCard = styled.div`
  min-width: 500px;
  min-height: 300px;
  margin-left: 70px;
  margin-top: 20px;
  background-color: "#15ffd4";
  color: ${(props) => (props.theme.isDark ? "#ffffff" : "#404040")};
  /* border-radius: 15px;
  box-shadow: 2px 4px 50px
    ${(props) =>
      props.theme.isDark
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)"}; */
  padding-left: 20px;
  padding-right: 20px
  padding-top: 5px;
  font-family: Inter;
  border-style: solid;
  border-color: #E8E8E8;
  border-radius: 4px;
`;

export const LoanHeading = styled.div`
  margin-top: 10px;
  font-size: 1.75rem;
  font-weight: 450;
`;

export const LoanSubHeading = styled.div`
  font-size: 16px;
  font-weight: 450;
  // color: #606060; C7B8B8
  color: ${(props) => (props.theme.isDark ? "#C7B8B8" : "#606060")};
`;

export const LoanDescription = styled.div`
  font-size: 16px;
  font-weight: 450;
  margin-top: 30px;
  line-height: 150%;
`;

export const InterestTest = styled.text`
  color: ${(props) => (props.theme.isDark ? "#E4E2E2" : "#404040")};
`;

export const LoanDeclaration = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 450;
`;

export const LoanAmount = styled.text`
  font-size: 1.8rem;
  font-weight: 500;
`;

export const SlideDiv = styled.div`
  height: 25px;
  width: 200px;
`;
