import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/layout';
import Chart from "../chart/Chart.jsx"
import {dollar} from '../../utils/Icon.jsx'
import {useGlobalContext} from '../../context/GlobalContext/GlobalContext.jsx'


function Dashboard() {
  const {totalExpenses,totalIncome} = useGlobalContext();
  return (
    <DashboardStyled>
      <InnerLayout>
        <h3>All Transactions</h3>
        <div className='stats-con'>
          <div className='chart-con'>
             <Chart/>
             <div className="amount-con">
              <div className="income">
                <h6>Total Income: <p>
                    
                    {dollar} {totalIncome()}
                 
            </p></h6>
                
              </div>
                 <div className="expense">
                  <h6>Total Expense:  <p>
                    {dollar}{totalExpenses()}
                  </p></h6>
                 
                 </div>
                 <div className="balance">
                         <h6>Total Balance: <p>
                          {dollar}{totalExpenses()}
                         </p></h6>
                         
                 </div>
             </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}



const DashboardStyled = styled.div`


`;
export default Dashboard