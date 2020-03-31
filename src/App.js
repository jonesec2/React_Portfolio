import React from 'react';
import {
   BrowserRouter as Router,
   // Switch,
   // Route,
   // Link,
   // useRouteMatch,
   // useParams
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
// import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";


export default function App() {
   return (
      <Router>
            <Wrapper>
            <div id="page-top">
               <Navbar></Navbar>
               {/* <Home></Home> */}
            </div>
            </Wrapper>
      </Router>
   );
}

