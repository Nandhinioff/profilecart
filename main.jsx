import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import MyApp from './PysioDetails.jsx'
import { UserCart } from './usercart/UserCart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MyApp/> */}
    <UserCart/>
  </React.StrictMode>,
)
