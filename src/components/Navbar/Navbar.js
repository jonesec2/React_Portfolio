import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./style.css";
import Home from "../../pages/Home/Home";
import Education from "../../pages/Education/Education";
import Examples from "../../pages/Examples/Examples";
import Experience from "../../pages/Experience/Experience";
import Skills from "../../pages/Skills/Skills";
import Interests from "../../pages/Interests/Interests";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function Navbar() {
   return (
      <Router>
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
               <Link className="navbar-brand js-scroll-trigger" to="contact">
                  <span className="d-block d-lg-none">Christian Jones</span>
                  <span className="d-none d-lg-block">
                     <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img\headshot1.JPG" alt="" />
                  </span>
               </Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="nav-link js-scroll-trigger" to="contact">Contact</Link>
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

            <Switch>
               <Route path="/examples">
                  <Examples />
               </Route>
               <Route path="/contact">
                  <Home />
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
         </div>
      </Router>

      // <div className="container-fluid p-0">

      //    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
      //       <div className="w-100">
      //          <h1 className="mb-0">Christian
      //             <span className="text-primary">Jones</span>
      //          </h1>
      //          <div className="subheading mb-5">Richmond, Virginia · (804) 456-2130 ·
      //             <a href="mailto:jonesec2@gmail.com">jonesec2@gmail.com</a>
      //          </div>
      //          <p className="lead mb-5">I am an experienced Quality Analyst ready to transition from validating applications to
      //             creating them.</p>
      //          <div className="social-icons">
      //             <a href="https://www.linkedin.com/in/edward-christian-jones-4170009b/" target="_blank">
      //                <i className="fab fa-linkedin-in"></i>
      //             </a>
      //             <a href="https://github.com/jonesec2">
      //                <i className="fab fa-github"></i>
      //             </a>
      //             <a href="Edward Christian Jones Resume 2019.pdf" target="_blank">
      //                <i className="fas fa-file-pdf"></i>
      //             </a>
      //          </div>
      //       </div>
      //    </section>

      //    <hr className="m-0"/>

      //    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="examples">
      //       <div className="w-100">
      //          <h2 className="mb-5">Examples</h2>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-1">Good Cuisine <a href="https://github.com/schoe14/Good-Cuisine"
      //                      title="Good Cuisine Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
      //                <div className="subheading mb-3">

      //                   <a href="https://good-cuisine.herokuapp.com/" title="Good Cuisine" target="_blank"><img
      //                         className="img-fluid mx-auto mb-2" src="img/goodCuisine.JPG" alt="Good Cuisine"/></a>

      //                </div>
      //                <p>Search and save recipes based on your preferences, and dietary needs. Create a free account to save
      //                   and track these recipes.</p>
      //             </div>
      //          </div>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-1">Pack It <a href="https://github.com/jonesec2/Pack-It" title="Pack It Repo"
      //                      target="_blank"> <i className="fab fa-github"></i></a></h3>
      //                <div className="subheading mb-3">

      //                   <a href="https://jonesec2.github.io/Pack-It/" title="Pack It" target="_blank"><img
      //                         className="img-fluid mx-auto mb-2" src="img/packItProject.JPG" alt="Pack It"/></a>

      //                </div>
      //                <p>Know what the weather will be like at your travel destination, and let Pack It suggest clothes
      //                   you'll need for any situation. Add and pack items in your own virtual "Suitcase".</p>
      //             </div>
      //          </div>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-1">In Good Spirits <a href="https://github.com/jonesec2/Make_Me_A_Drink"
      //                      title="In Good Spirits Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
      //                <div className="subheading mb-3">

      //                   <a href="https://jonesec2.github.io/Make_Me_A_Drink/" title="In Good Spirits" target="_blank"><img
      //                         className="img-fluid mx-auto mb-2" src="img/InGoodSpirits.JPG" alt="In Good Spirits"/></a>

      //                </div>

      //                <p>Throwing a party, need something new for New Years, or just bored on a Friday? Let us suggest
      //                   random cocktails. We'll tell you what you need and what to do, all In Good Spirits.</p>
      //             </div>
      //          </div>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-1">New York Times Search <a href="https://github.com/jonesec2/NewYorkTimesSearch"
      //                      title="New York Times Search Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
      //                <div className="subheading mb-3">

      //                   <a href="https://jonesec2.github.io/NewYorkTimesSearch/" title="New York Times Search"
      //                      target="_blank"><img className="img-fluid mx-auto mb-2" src="img/newYorkSearch.JPG"
      //                         alt="New York Times Search"/></a>

      //                </div>
      //                <p>In collaboration with like minded developers, The New York Times Article Search was created.
      //                   Provide any search term and how many articles you want; set the year if desired, and then press
      //                   search. Any article is a single search away.</p>
      //             </div>
      //          </div>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-1">Profile Generator <a href="https://github.com/jonesec2/Profile_Generator"
      //                      title="Profile Generator Repo" target="_blank"> <i className="fab fa-github"></i></a></h3>
      //                <div className="subheading mb-3">

      //                   <a href="https://github.com/jonesec2/Profile_Generator" title="Profile Generator"
      //                      target="_blank"><img className="img-fluid mx-auto mb-2" src="img/profile_generator_demo.gif"
      //                         alt="Profile Generator"/></a>

      //                </div>
      //                <p>This is a node application using inquirer, and pdf-puppeteer to create a "team" profile based on
      //                   the input of the user. The CLI prompts the user with questions and once they are done produces a
      //                   pdf with the user's input.</p>
      //             </div>
      //          </div>
      //       </div>
      //    </section>

      //    <hr className="m-0"/>

      //    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      //       <div className="w-100">
      //          <h2 className="mb-5">Experience</h2>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-0">Senior Quality Analyst</h3>
      //                <div className="subheading mb-3">Virginia Retirement System through UDig</div>
      //                <p>Manual User Interface testing and ETL backend validations. Working closely within an Agile Scrum
      //                   Team to
      //                   fulfill client needs.</p>
      //             </div>
      //             <div className="resume-date text-md-right">
      //                <span className="text-primary">December 2019 - Present</span>
      //             </div>
      //          </div>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-0">Quality Analyst</h3>
      //                <div className="subheading mb-3">Advantasure</div>
      //                <p>Using the SAFe Agile approach our Scrum Team created ACA Compliant Enterprise Software; the first
      //                   of it's
      //                   kind to exist in the online marketplace.</p>
      //                <p>I was in charge of creating mock data, test plans / cases, and testing scenarios. My day to day
      //                   looked
      //                   like testing complicated Medical Insurance logic through SQL queries, and validating UI was
      //                   correctly
      //                   displaying the information from our backend SQL structure. </p>
      //             </div>
      //             <div className="resume-date text-md-right">
      //                <span className="text-primary">August 2017 - December 2019</span>
      //             </div>
      //          </div>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-0">Sample Coordinator</h3>
      //                <div className="subheading mb-3">Scientific Analytical Institute</div>
      //                <p>Working closely within a small team, we triaged packages from hundreds of companies and tracked
      //                   their
      //                   details for various mineral testings. Meticulous detail and coordination were key to success.</p>
      //             </div>
      //             <div className="resume-date text-md-right">
      //                <span className="text-primary">June 2017 - August 2017</span>
      //             </div>
      //          </div>

      //       </div>

      //    </section>

      //    <hr className="m-0"/>

      //    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      //       <div className="w-100">
      //          <h2 className="mb-5">Education</h2>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      //             <div className="resume-content">
      //                <h3 className="mb-0">Virginia Commonwealth University</h3>
      //                <div className="subheading mb-3">Bachelor of Arts in Music</div>
      //                <div>classNameical Guitar - General Arts in Music</div>
      //                <p>GPA: 3.00</p>
      //             </div>
      //             <div className="resume-date text-md-right">
      //                <span className="text-primary">August 2009 - May 2013</span>
      //             </div>
      //          </div>

      //          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
      //             <div className="resume-content">
      //                <h3 className="mb-0">University of Richmond</h3>
      //                <div className="subheading mb-3">Coding Bootcamp</div>
      //                <p>Predicted Completion April 2020</p>
      //             </div>
      //             <div className="resume-date text-md-right">
      //                <span className="text-primary">October 2019 - April 2020</span>
      //             </div>
      //          </div>
      //       </div>
      //    </section>

      //    <hr className="m-0"/>

      //    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      //       <div className="w-100">
      //          <h2 className="mb-5">Skills</h2>

      //          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      //          <ul className="list-inline dev-icons">
      //             <li className="list-inline-item">
      //                <i className="fab fa-html5"></i>
      //             </li>
      //             <li className="list-inline-item">
      //                <i className="fab fa-css3-alt"></i>
      //             </li>
      //             <li className="list-inline-item">
      //                <i className="fab fa-js-square"></i>
      //             </li>
      //             <li className="list-inline-item">
      //                <i className="fab fa-node-js"></i>
      //             </li>
      //             <li className="list-inline-item">
      //                <i className="fab fa-sass"></i>
      //             </li>
      //             <li className="list-inline-item">
      //                <i className="fab fa-npm"></i>
      //             </li>
      //          </ul>

      //          <div className="subheading mb-3">Workflow</div>
      //          <ul className="fa-ul mb-0">
      //             <li>
      //                <i className="fa-li fa fa-check"></i>
      //                Mobile-First, Responsive Design</li>
      //             <li>
      //                <i className="fa-li fa fa-check"></i>
      //                Cross Browser Testing &amp; Debugging</li>
      //             <li>
      //                <i className="fa-li fa fa-check"></i>
      //                Cross Functional Teams</li>
      //             <li>
      //                <i className="fa-li fa fa-check"></i>
      //                Agile Development &amp; Scrum</li>
      //          </ul>
      //       </div>
      //    </section>

      //    <hr className="m-0"/>

      //    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      //       <div className="w-100">
      //          <h2 className="mb-5">Interests</h2>
      //          <p>I am eager to learn new skills, to further my career,
      //             but also use coding to express myself artistically. I am inspired by my hobbies; videogames, movies,
      //             Dungeons
      //             and Dragons, and books. I can't wait to use my new skills to create a website for my D&D group, or make a
      //             server to track books on my "to read" list.</p>
      //          <p className="mb-0">Thanks for visiting my online Portfolio. Please check out my other projects on my <a
      //                href="https://github.com/jonesec2" title="Christian Jones gitHub" target="_blank">gitHub</a>, and feel
      //             free
      //             to contact me with any inquiries about myself or my work.
      //          </p>
      //       </div>
      //    </section>

      //    <hr className="m-0"/>

      // </div>


      // <script src="vendor/jquery/jquery.min.js"></script>
      // <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      // <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
      // <script src="js/resume.min.js"></script>

      // </div>
   );
}

export default Navbar;
