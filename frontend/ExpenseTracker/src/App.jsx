import React, {useState,useMemo} from 'react';
import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from './styles/layout';
import Orb from './components/Orb/Orb';
import Navigation from "./components/navigation/Navigation";
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income'
import Expenses from './components/Expenses/Expenses'
import { useGlobalContext } from './context/GlobalContext/GlobalContext';


function App() {
  const [active, setActive] = React.useState(1)
    
  const global = useGlobalContext();
  console.log(global);
  

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Income/>
      case 4:
        return <Expenses/>
      default: 
      return <Dashboard/>
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])
  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
          <Navigation active={active} setActive={setActive}/>
          <main><h1>
              {displayData()}
          </h1></main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;

  main{
     flex: 1;
    background: rgba(252, 246, 249, 0.78);
    height: 90vh;
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
    width: 0;
    }
  }
`;
 
export default App;
