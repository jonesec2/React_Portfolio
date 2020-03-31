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

function App() {
   return (
      <Router>
         <div className="App">
            <Wrapper>
               <Navbar>

               </Navbar>
            </Wrapper>
         </div >
      </Router>
   );
}

export default App;
