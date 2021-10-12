import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Routing from './app.routing';
const App =(props) => {
  return (
    <BrowserRouter>
 <Routing/>
 </BrowserRouter>
  );
}

export default App;
