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
            <Wrapper>
               <Navbar>
               </Navbar>
            </Wrapper>
      </Router>
   );
}

export default App;
