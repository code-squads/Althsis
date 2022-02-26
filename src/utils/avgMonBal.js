const monthNums = [
  "12",
  "11",
  "10",
  "09",
  "08",
  "07",
  "06",
  "05",
  "04",
  "03",
  "02",
  "01",
];

const monthlyBalCalculator = (arr) => {
  // as Transactions array is traversed reversely those amount are saved here
  let revMonthlyAmounts = [];

  // just a copy of monthly num values
  let monthNumbers = [...monthNums];

  // to save the monthly values in !reverse way
  let monthlyAmounts;

  // each months balance
  let monthlyBalance = [];

  // Traversing the transactions array in reverse order
  //
  // slice method finds the month from the timestamp
  // example timestamp: "2021-01-11" slice returns 01
  // the first occurence from reverse order is pushed in revMonthlyAmounts array
  arr
    .slice()
    .reverse()
    .forEach((i) => {
      if (monthNumbers[0] == i.valueDate.slice(5, 7)) {
        revMonthlyAmounts.push(i.amount);
        monthNumbers.shift();
      }
    });

  // Saving the monthly values in !reverse way
  monthlyAmounts = [...revMonthlyAmounts.reverse()];

  // Loop to calculate actual monthly balance by subtracting the current monthly amount from last month's amount
  for (let i = 1; i < monthlyAmounts.length; i++) {
    monthlyBalance.push(monthlyAmounts[i] - monthlyAmounts[i - 1]);
  }

  // adding the first months amount as it is
  monthlyBalance.unshift(parseInt(monthlyAmounts));

  // returning the array with monthly balances
  return monthlyBalance;
};

const monthlyBalAverage = (arr) => {
  // Takes the array sums it divides it by 12(months) to find the average
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / 12;
  return avg;
};

const sumAverages = (arr) => {
  // To sum the array values
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum;
};

const length = (data) => {
  // finds the lenght of the object
  return Object.keys(data).length;
};

export const avgMonBalance = (props) => {
  let average;

  // Array to store bank wise averages
  let perBankAverages = [];

  // total fipTypes are calculated
  // in our json its 2 (acme-fip, setu-fip)
  const fiptypes = length(props.Payload);

  // First loop runs on each fip
  for (let i = 0; i < fiptypes; i++) {
    // total bank accounts calculated || data arrays length
    const totalBankAccounts = length(props.Payload[i].data);

    // Second loop runs on each data array of current fip
    for (let j = 0; j < totalBankAccounts; j++) {
      // Transaction array is extracted
      const transactionsPerBank =
        props.Payload[i].data[j].decryptedFI.account.transactions.transaction;

      // Monthly Balances of Transactionarray
      const perMonthsBal = monthlyBalCalculator(transactionsPerBank);

      // Calculating Average of those Monthly Balances
      const averageMonthlyBal = monthlyBalAverage(perMonthsBal);

      // Pushing it in Array where every bank's average is stored
      perBankAverages.push(averageMonthlyBal);
    }
  }
  average = sumAverages(perBankAverages);

  // returning the final average per month of all bank accounts
  return average;
};
