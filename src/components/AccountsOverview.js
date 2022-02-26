import React, { useState, useRef, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PieController, DoughnutController } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { initialsFromName } from '../utils/data';
import { BalanceChartCanvas, Profile, ImpText, FrequentTxContainer } from './AccountsOverview.styled';

import { data } from '../constants/dummyData'
ChartJS.register(ArcElement, DoughnutController, Tooltip, Legend, PieController);



const AccountsOverview = () => {
  const balanceChartDOM = useRef();
  const [balanceChartObj, setBalanceChartObj] = useState();
  
  useEffect(() => {
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
        <div className='no-gutters d-flex align-items-center'>
          <div className='pt-3' md={4}>
            <BalanceChartCanvas ref={balanceChartDOM} />
            <span>
              Bank accounts: 
              <ImpText>
                5
              </ImpText>
              <br/>
              Net balance: 
              <ImpText>
                ₹ {data.totalBalance}
              </ImpText>
            </span>
          </div>
          <div md={3} className='d-flex h6 m-3'>
          </div>
          <FrequentTxContainer>
            
          </FrequentTxContainer>
        </div>
      </div>
    </>
  )
}

export default AccountsOverview