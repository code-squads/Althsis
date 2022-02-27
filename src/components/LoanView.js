import React, { useState, useEffect } from "react";
import props from "../BankData.json";
import {
  avgMonBalance,
  getWords,
  numberWithCommas,
} from "../utils/loanCalcUtils";

import {
  Loan,
  ChartDiv,
  LoanDisplayCard,
  LoanHeading,
  LoanSubHeading,
  LoanDescription,
  LoanAmount,
  LoanDeclaration,
  InterestTest,
  SlideDiv,
} from "./loanView.styled";

const LoanView = () => {
  const [duration, setDuration] = useState("12");
  const [loanAmount, setLoanAmount] = useState(84000);
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
      <Loan>
        <div className="d-flex align-items-center justify-content-center">
          <ChartDiv></ChartDiv>
          <LoanDisplayCard>
            <LoanHeading>Permissible Loan</LoanHeading>
            <LoanSubHeading>
              Based on your previous months savings
            </LoanSubHeading>
            <LoanDescription>
              Your Monthly Average Savings : ₹{" "}
              {numberWithCommas(Math.round(avgBalance / 1000) * 1000)}
              <br />
              Loan Duration : {getWords(duration)}
              <SlideDiv>
                <input
                  type="range"
                  defaultValue={12}
                  min="6"
                  max="72"
                  step={6}
                  onChange={handleDurationChange}
                ></input>
              </SlideDiv>
              <InterestTest>Interest rate : 12%</InterestTest>
            </LoanDescription>
            <LoanDeclaration>
              Total Permissible Loan
              <LoanAmount>
                {" "}
                : ₹ {numberWithCommas(Math.round(loanAmount / 1000) * 1000)}
              </LoanAmount>
            </LoanDeclaration>
          </LoanDisplayCard>
        </div>
      </Loan>
    </div>
  );
};

export default LoanView;
