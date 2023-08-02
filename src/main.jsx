import React from 'react'
import ReactDOM from 'react-dom/client'
import {HeaderComponent, HeroComponent} from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderComponent/> 
    <HeroComponent/> 
  </React.StrictMode>,
)
