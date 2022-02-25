import React, { useState, useRef, useLayoutEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PieController, DoughnutController } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { initialsFromName } from '../utils/data';
import { BalanceChartCanvas, Profile, ImpText, FrequentTxContainer } from './AccountsOverview.styled';

ChartJS.register(ArcElement, DoughnutController, Tooltip, Legend, PieController);

export const data = {
  profile: {
    name: "Rupesh Raut"
  },
  labels: ["SBI", "IDBi", "Bank of barodsa", "PNB", "HDFC"],
  datasets: [{
    label: "Population (millions)",
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    data: [50000, 2000 , 80000, 8000, 10000]
  }],
  totalBalance: 150000
};

const AccountsOverview = () => {
  const balanceChartDOM = useRef();
  const [balanceChartObj, setBalanceChartObj] = useState();
  
  useLayoutEffect(() => {
    if(balanceChartDOM.current){
      if(balanceChartObj)
        balanceChartObj?.destroy();
  
      const newBalanceChartObj = new ChartJS(balanceChartDOM.current, {
        type: 'pie',
        data: data,
        plugins: [ChartDataLabels],
        options: {
          title: {
            display: true,
            text: 'Balance distribution'
          },
          plugins:{   
            legend: {
              display: false
            },
            datalabels: {
              color: '#ffffff',
              formatter: (value) => {
                if(value / data.totalBalance >= 0.1)
                  return '₹ ' + value;
                return '';
              }
            }
          }
        }
      });
      setBalanceChartObj(newBalanceChartObj);
    }
    return () => {
      if(window.balanceChartObj && window.balanceChartObj.destroy)
        window.balanceChartObj.destroy();
    }
  }, [])

  return (
    <>
      <div className='w-100'>
        <Profile>
          <div>
            { initialsFromName(data.profile.name) }
          </div>
          <div className='profileName'>
            { data.profile.name }
          </div>
        </Profile>
        <br/>
        {/* <div className='d-flex'>
          <div className='m-3'>
            <canvas ref={balanceChartDOM} width={'200'}/>
          </div>
          <div>
            Bank accounts: 5
            <br/>
            Net balance: ₹ {data.totalBalance}
          </div>
        </div> */}
        <div className='no-gutters d-flex align-items-center'>
          <div className='pt-3' md={4}>
            <BalanceChartCanvas ref={balanceChartDOM} />
          </div>
          <div md={3} className='d-flex h6 m-3'>
            <span>
              Bank accounts: 
              <ImpText>
                5
              </ImpText>
              <br/><br/>
              Net balance: 
              <ImpText>
                ₹ {data.totalBalance}
              </ImpText>
            </span>
          </div>
          <FrequentTxContainer>
            
          </FrequentTxContainer>
        </div>
      </div>
    </>
  )
}

export default AccountsOverview