import React, { useState, useEffect } from "react";
import props from "../BankData.json";
import { avgMonBalance } from "../utils/avgMonBal";

import {
  ChartDiv,
  LoanDisplayCard,
  LoanHeading,
  LoanSubHeading,
  SlideDiv,
} from "./loanView.styled";

const LoanView = () => {
  const [duration, setDuration] = useState("12");
  const [loanAmount, setLoanAmount] = useState("");
  const [avgBalance, setAvgBalance] = useState(0);

  useEffect(() => {
    setAvgBalance(avgMonBalance(props));
    return () => {};
  }, []);

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    setLoanAmount((e.target.value * avgBalance * 70) / 100);
  };

  return (
    <div className="w-100">
      <div className="d-flex align-items-center justify-content-center">
        <ChartDiv></ChartDiv>
        <LoanDisplayCard>
          <LoanHeading>Permissible Loan</LoanHeading>
          <LoanSubHeading>Based on your previous months savings</LoanSubHeading>
          Your Monthly Average Balance : {avgBalance}
          <br />
          Loan Duration : {duration} months
          <SlideDiv>
            <input
              type="range"
              defaultValue={12}
              min="6"
              max="48"
              step={6}
              onChange={handleDurationChange}
            ></input>
          </SlideDiv>
          Interest rate : 12%
          <br />
          loan amount : {loanAmount}
        </LoanDisplayCard>
      </div>
    </div>
  );
};

export default LoanView;
