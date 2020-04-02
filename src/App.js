import React from 'react';
import {
   BrowserRouter as Router,

} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';


export default function App() {

   return (
      <Router>
         <Wrapper>
            <Navbar></Navbar>
         </Wrapper>
      </Router>
   );
}

