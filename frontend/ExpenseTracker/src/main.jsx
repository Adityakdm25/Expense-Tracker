import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyles.jsx';
// import './index.css'
import {GlobalProvider} from './context/GlobalContext/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <GlobalProvider>
    <App />
    </GlobalProvider>
    
   
   
  </React.StrictMode>,
)
