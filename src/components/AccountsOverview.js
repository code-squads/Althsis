import React, { useState, useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  PieController,
  DoughnutController,
  BarController,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  BalanceChartCanvas,
  ImpText,
  FrequentTxContainer,
  FreqTxChartCanvas,
} from "./AccountsOverview.styled";

import { upiregex } from "../constants/regex";
import bankData from "../BankData.json";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { THEME_VARIABLES } from "../constants/THEMES";
import { ACC_COLORS } from "../constants/colors";

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  BarController,
  DoughnutController,
  PieController,
  CategoryScale,
  LinearScale
);

const topXTransactions = (allTransactions, topX) => {
  const alreadyPresentIndex = {};
  const upiList = [{ upi: "dummyfor0thidx", count: 0, amount: 0 }];
  let parsedUPI, amount;
  for (let i = 0; i < allTransactions.length && i < 300; i++) {
    parsedUPI = allTransactions[i].narration.match(upiregex);
    amount = Number(allTransactions[i].amount);
    if (parsedUPI) {
      for (const upi of parsedUPI) {
        if (alreadyPresentIndex[upi]) {
          upiList[alreadyPresentIndex[upi]].count++;
          upiList[alreadyPresentIndex[upi]].amount += amount;
        } else {
          alreadyPresentIndex[upi] = upiList.length;
          upiList.push({ upi, count: 1, amount });
        }
      }
    }
  }

  // Sort based on count
  // const sortedUpiList = upiList.sort((a, b) => b.count - a.count);

  // Sort based on amount
  const sortedUpiList = upiList.sort((a, b) => b.amount - a.amount);

  if (sortedUpiList.length > topX) sortedUpiList.length = topX;
  return sortedUpiList;
};

const AccountsOverview = () => {
  const balanceChartDOM = useRef();
  const barChartDOM = useRef();
  const [balanceChartObj, setBalanceChartObj] = useState();
  const [freqTxChartObj, setFreqTxChartObj] = useState();

  const { theme } = useContext(ThemeContext);

  const [topTransactionsData, setTopTransactionsData] = useState(null);
  const [balances, setBalances] = useState(null);

  useEffect(() => {
    // Fetch & process all the data here
    const allTransactions = [];
    for (const tx of bankData.Payload[0].data) {
      allTransactions.push(...tx.decryptedFI.account.transactions.transaction);
    }
    window.allTransactions = allTransactions;
    const top5UPIs = topXTransactions(allTransactions, 5);
    console.log("Top 5 UPIs :", top5UPIs);
    setTopTransactionsData(top5UPIs);
    window.banks = bankData.Payload;
    const allBalances = [];
    console.log(bankData.Payload[0].data[0]);
    bankData.Payload.forEach((bank) => {
      bank.data.forEach((account) =>
        allBalances.push({
          acc: ` ${account.maskedAccNumber.slice(6)}`,
          balance: Number(
            Number(
              account.decryptedFI.account?.transactions?.transaction[
                account.decryptedFI.account?.transactions?.transaction?.length -
                  1
              ]?.currentBalance
            ).toFixed(0)
          ),
        })
      );
    });
    setBalances(allBalances);
  }, []);

  useEffect(() => {
    if (!balances) return;

    const totalBalance = balances.reduce(
      (prevBal, currAcc) => prevBal + currAcc.balance,
      0
    );
    if (balanceChartDOM.current) {
      if (balanceChartObj) balanceChartObj?.destroy();
      const newBalanceChartObj = new ChartJS(balanceChartDOM.current, {
        type: "pie",
        data: {
          labels: balances.map((acc) => acc.acc),
          datasets: [
            {
              label: "Balance (₹): ",
              backgroundColor: ACC_COLORS,
              data: balances.map((acc) => acc.balance),
            },
          ],
        },
        plugins: [ChartDataLabels],
        options: {
          title: {
            display: true,
            text: "Balance distribution",
          },
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              color: "#ffffff",
              formatter: (value) => {
                if (value / totalBalance >= 0.2) return "₹ " + value;
                return "";
              },
            },
          },
        },
      });
      setBalanceChartObj(newBalanceChartObj);
    }
    return () => {
      if (balanceChartObj && balanceChartObj.destroy) balanceChartObj.destroy();
    };
  }, [theme, balances]);

  useEffect(() => {
    if (!topTransactionsData) return;

    // Create frequent tx pie chart
    if (barChartDOM.current) {
      if (freqTxChartObj) freqTxChartObj?.destroy();

      const allTransactions = [];
      for (const tx of bankData.Payload[0].data) {
        allTransactions.push(
          ...tx.decryptedFI.account.transactions.transaction
        );
      }
      console.log(allTransactions);
      window.allTransactions = allTransactions;
      const top5UPIs = topXTransactions(allTransactions, 5);
      console.log("Top 5 UPIs :", top5UPIs);

      const newFreqTxChart = new ChartJS(barChartDOM.current, {
        type: "bar",
        data: {
          labels: top5UPIs.map((upis) => upis.upi),
          datasets: [
            {
              label: "Tx amount (₹): ",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: top5UPIs.map((upis) => upis.amount),
            },
          ],
        },
        plugins: [ChartDataLabels],
        options: {
          legend: {
            labels: {
              color: "#000000",
            },
            display: false,
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
              },
              ticks: {
                display: false,
              },
            },
            y: {
              ticks: {
                color: THEME_VARIABLES[theme].textColor,
                font: {
                  size: "13px",
                },
              },
              grid: {
                display: false,
                drawBorder: false,
              },
            },
          },
          indexAxis: "y",
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              color: "#ffffff",
              formatter: (value) => {
                return "₹ " + value;
              },
            },
          },
        },
      });
      setFreqTxChartObj(newFreqTxChart);
    }

    return () => {
      if (freqTxChartObj && freqTxChartObj.destroy) freqTxChartObj.destroy();
    };
  }, [theme, topTransactionsData]);

  return (
    <>
      <div className="w-100">
        <div className="no-gutters d-flex align-items-center h-100">
          <div className="mx-4 w-50">
            <BalanceChartCanvas ref={balanceChartDOM} />
            <br />
            <div className="text-center">
              Bank accounts:
              <ImpText> 5 </ImpText>
              <br />
              Net balance:
              <ImpText>
                ₹
                {balances
                  ? Number(
                      balances.reduce(
                        (prevBal, currAcc) => prevBal + currAcc.balance,
                        0
                      )
                    )
                  : 0}
              </ImpText>
            </div>
          </div>
          <FrequentTxContainer>
            <h3>Top transactions</h3>
            <FreqTxChartCanvas ref={barChartDOM} />
          </FrequentTxContainer>
        </div>
      </div>
    </>
  );
};

export default AccountsOverview;
