import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "../../pages/Home/Home";
import Education from "../../pages/Education/Education";
import Examples from "../../pages/Examples/Examples";
import Experience from "../../pages/Experience/Experience";
import Skills from "../../pages/Skills";
import Interests from "../../pages/Interests/Interests";


function Navbar({ location }) {

   return (

      <div id="page-top">
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link className="navbar-brand js-scroll-trigger" to="">
               <span className="d-block d-lg-none">Christian Jones</span>
               <span className="d-none d-lg-block">
                  <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/headshot1.jpg" alt="" />
               </span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="/">Contact</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="examples">Examples</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="experience">Experience</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="education">Education</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="skills">Skills</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link js-scroll-trigger" to="interests">Interests</Link>
                  </li>
               </ul>
            </div>
         </nav>

         <TransitionGroup>
            <CSSTransition
               key={location.key}
               timeout={{ enter: 300, exit: 300 }}
               classNames={'fade'}
            >
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/examples">
                     <Examples />
                  </Route>
                  <Route path="/education">
                     <Education />
                  </Route>
                  <Route path="/experience">
                     <Experience />
                  </Route>
                  <Route path="/skills">
                     <Skills />
                  </Route>
                  <Route path="/interests">
                     <Interests />
                  </Route>
               </Switch>
            </CSSTransition>
         </TransitionGroup>
      </div>
   );
}

export default withRouter(Navbar);
