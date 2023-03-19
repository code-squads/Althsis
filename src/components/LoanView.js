import React, { useState, useEffect } from "react";
import props from "../BankData.json";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  avgMonBalance,
  getWords,
  numberWithCommas,
  nFormatter,
} from "../utils/loanCalcUtils";

import {
  ChartHeading,
  Loan,
  LoanChart,
  LoanDisplayCard,
  LoanHeading,
  LoanSubHeading,
  LoanDescription,
  LoanAmount,
  LoanDeclaration,
  InterestTest,
  SlideDiv,
  Chartbox,
} from "./loanView.styled";

Chart.register(ChartDataLabels);

const LoanView = () => {
  const [duration, setDuration] = useState("12");
  const [loanAmount, setLoanAmount] = useState(84000);
  const [avgBalance, setAvgBalance] = useState(0);

  const MonthlyArrays = avgMonBalance(props)[1];
  // console.log(`MonthlyArrays : ${MonthlyArrays}`);
  const formattedSavings = MonthlyArrays.map((e) => nFormatter(e));
  // console.log(`Formatted : ${formattedSavings}`);

  useEffect(() => {
    setAvgBalance(avgMonBalance(props)[0]);
    return () => {};
  }, []);

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    setLoanAmount((e.target.value * avgBalance * 70) / 100);
  };

  const labels = [...formattedSavings];
  const data = {
    labels: labels,

    datasets: [
      {
        label: "dfxf  ",
        data: [...MonthlyArrays],
        datalabels: {
          align: "end",
          anchor: "end",
        },
        backgroundColor: "#B9D9EB",
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#007FFF",
        borderColor: "#0066b2",
      },
    ],
  };

  return (
    <div className="w-100">
      <Loan>
        <div className="d-flex align-items-center justify-content-center">
          <LoanChart>
            <ChartHeading>Savings</ChartHeading>
            <Chartbox>
              <Line
                options={{
                  layout: {
                    padding: {
                      top: 20,
                      left: 20,
                      right: 20,
                    },
                  },
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                    datalabels: {
                      backgroundColor: function (context) {
                        return context.dataset.backgroundColor;
                      },
                      borderRadius: 4,
                      color: "#3e95cd",
                      font: {
                        weight: "bold",
                      },
                      formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                      },
                    },
                  },
                  scales: {
                    x: { display: false },
                    y: {
                      display: false,
                    },
                  },
                }}
                data={data}
              />
            </Chartbox>
          </LoanChart>
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
