import React from 'react';
import {
   BrowserRouter as Router,

} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
// import Education from "./pages/Education/Education";


export default function App() {

   return (
      <Router>
         <Wrapper>
            <div id="page-top">
               <Navbar></Navbar>
            </div>
         </Wrapper>
      </Router>
   );
}

