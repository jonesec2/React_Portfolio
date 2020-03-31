import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
   //  <nav className="navbar navbar-expand-lg navbar-light bg-light">
   //    <Link className="navbar-brand" to="/">
   //      Christian Jones
   //    </Link>
   //    <div>
   //      <ul className="navbar-nav">
   //        <li className="nav-item">
   //          <Link
   //            to="/"
   //            className={
   //              window.location.pathname === "/" || window.location.pathname === "/contact"
   //                ? "nav-link active"
   //                : "nav-link"
   //            }
   //          >
   //            Contact
   //          </Link>
   //        </li>
   //        <li className="nav-item">
   //          <Link
   //            to="/projects"
   //            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
   //          >
   //            Projects
   //          </Link>
   //        </li>
   //        <li className="nav-item">
   //          <Link
   //            to="/experience"
   //            className={window.location.pathname === "/experience" ? "nav-link active" : "nav-link"}
   //          >
   //            Experience
   //          </Link>
   //        </li>
   //        <li className="nav-item">
   //          <Link
   //            to="/education"
   //            className={window.location.pathname === "/education" ? "nav-link active" : "nav-link"}
   //          >
   //            Education
   //          </Link>
   //        </li>
   //        <li className="nav-item">
   //          <Link
   //            to="/skills"
   //            className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
   //          >
   //            Skills
   //          </Link>
   //        </li>
   //        <li className="nav-item">
   //          <Link
   //            to="/interests"
   //            className={window.location.pathname === "/interests" ? "nav-link active" : "nav-link"}
   //          >
   //            Interests
   //          </Link>
   //        </li>
   //      </ul>
   //    </div>
   //  </nav>
   <div id="page-top">

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
         <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <span class="d-block d-lg-none">Christian Jones</span>
            <span class="d-none d-lg-block">
               <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img\headshot1.JPG" alt=""/>
            </span>
         </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
               <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#examples">Examples</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#education">Education</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
               </li>
            </ul>
         </div>
      </nav>

      <div class="container-fluid p-0">

         <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
            <div class="w-100">
               <h1 class="mb-0">Christian
                  <span class="text-primary">Jones</span>
               </h1>
               <div class="subheading mb-5">Richmond, Virginia · (804) 456-2130 ·
                  <a href="mailto:jonesec2@gmail.com">jonesec2@gmail.com</a>
               </div>
               <p class="lead mb-5">I am an experienced Quality Analyst ready to transition from validating applications to
                  creating them.</p>
               <div class="social-icons">
                  <a href="https://www.linkedin.com/in/edward-christian-jones-4170009b/" target="_blank">
                     <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://github.com/jonesec2">
                     <i class="fab fa-github"></i>
                  </a>
                  <a href="Edward Christian Jones Resume 2019.pdf" target="_blank">
                     <i class="fas fa-file-pdf"></i>
                  </a>
               </div>
            </div>
         </section>

         <hr class="m-0"/>

         <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="examples">
            <div class="w-100">
               <h2 class="mb-5">Examples</h2>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-1">Good Cuisine <a href="https://github.com/schoe14/Good-Cuisine"
                           title="Good Cuisine Repo" target="_blank"> <i class="fab fa-github"></i></a></h3>
                     <div class="subheading mb-3">

                        <a href="https://good-cuisine.herokuapp.com/" title="Good Cuisine" target="_blank"><img
                              class="img-fluid mx-auto mb-2" src="img/goodCuisine.JPG" alt="Good Cuisine"/></a>

                     </div>
                     <p>Search and save recipes based on your preferences, and dietary needs. Create a free account to save
                        and track these recipes.</p>
                  </div>
               </div>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-1">Pack It <a href="https://github.com/jonesec2/Pack-It" title="Pack It Repo"
                           target="_blank"> <i class="fab fa-github"></i></a></h3>
                     <div class="subheading mb-3">

                        <a href="https://jonesec2.github.io/Pack-It/" title="Pack It" target="_blank"><img
                              class="img-fluid mx-auto mb-2" src="img/packItProject.JPG" alt="Pack It"/></a>

                     </div>
                     <p>Know what the weather will be like at your travel destination, and let Pack It suggest clothes
                        you'll need for any situation. Add and pack items in your own virtual "Suitcase".</p>
                  </div>
               </div>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-1">In Good Spirits <a href="https://github.com/jonesec2/Make_Me_A_Drink"
                           title="In Good Spirits Repo" target="_blank"> <i class="fab fa-github"></i></a></h3>
                     <div class="subheading mb-3">

                        <a href="https://jonesec2.github.io/Make_Me_A_Drink/" title="In Good Spirits" target="_blank"><img
                              class="img-fluid mx-auto mb-2" src="img/InGoodSpirits.JPG" alt="In Good Spirits"/></a>

                     </div>

                     <p>Throwing a party, need something new for New Years, or just bored on a Friday? Let us suggest
                        random cocktails. We'll tell you what you need and what to do, all In Good Spirits.</p>
                  </div>
               </div>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-1">New York Times Search <a href="https://github.com/jonesec2/NewYorkTimesSearch"
                           title="New York Times Search Repo" target="_blank"> <i class="fab fa-github"></i></a></h3>
                     <div class="subheading mb-3">

                        <a href="https://jonesec2.github.io/NewYorkTimesSearch/" title="New York Times Search"
                           target="_blank"><img class="img-fluid mx-auto mb-2" src="img/newYorkSearch.JPG"
                              alt="New York Times Search"/></a>

                     </div>
                     <p>In collaboration with like minded developers, The New York Times Article Search was created.
                        Provide any search term and how many articles you want; set the year if desired, and then press
                        search. Any article is a single search away.</p>
                  </div>
               </div>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-1">Profile Generator <a href="https://github.com/jonesec2/Profile_Generator"
                           title="Profile Generator Repo" target="_blank"> <i class="fab fa-github"></i></a></h3>
                     <div class="subheading mb-3">

                        <a href="https://github.com/jonesec2/Profile_Generator" title="Profile Generator"
                           target="_blank"><img class="img-fluid mx-auto mb-2" src="img/profile_generator_demo.gif"
                              alt="Profile Generator"/></a>

                     </div>
                     <p>This is a node application using inquirer, and pdf-puppeteer to create a "team" profile based on
                        the input of the user. The CLI prompts the user with questions and once they are done produces a
                        pdf with the user's input.</p>
                  </div>
               </div>
            </div>
         </section>

         <hr class="m-0"/>

         <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div class="w-100">
               <h2 class="mb-5">Experience</h2>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-0">Senior Quality Analyst</h3>
                     <div class="subheading mb-3">Virginia Retirement System through UDig</div>
                     <p>Manual User Interface testing and ETL backend validations. Working closely within an Agile Scrum
                        Team to
                        fulfill client needs.</p>
                  </div>
                  <div class="resume-date text-md-right">
                     <span class="text-primary">December 2019 - Present</span>
                  </div>
               </div>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-0">Quality Analyst</h3>
                     <div class="subheading mb-3">Advantasure</div>
                     <p>Using the SAFe Agile approach our Scrum Team created ACA Compliant Enterprise Software; the first
                        of it's
                        kind to exist in the online marketplace.</p>
                     <p>I was in charge of creating mock data, test plans / cases, and testing scenarios. My day to day
                        looked
                        like testing complicated Medical Insurance logic through SQL queries, and validating UI was
                        correctly
                        displaying the information from our backend SQL structure. </p>
                  </div>
                  <div class="resume-date text-md-right">
                     <span class="text-primary">August 2017 - December 2019</span>
                  </div>
               </div>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-0">Sample Coordinator</h3>
                     <div class="subheading mb-3">Scientific Analytical Institute</div>
                     <p>Working closely within a small team, we triaged packages from hundreds of companies and tracked
                        their
                        details for various mineral testings. Meticulous detail and coordination were key to success.</p>
                  </div>
                  <div class="resume-date text-md-right">
                     <span class="text-primary">June 2017 - August 2017</span>
                  </div>
               </div>

            </div>

         </section>

         <hr class="m-0"/>

         <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div class="w-100">
               <h2 class="mb-5">Education</h2>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div class="resume-content">
                     <h3 class="mb-0">Virginia Commonwealth University</h3>
                     <div class="subheading mb-3">Bachelor of Arts in Music</div>
                     <div>Classical Guitar - General Arts in Music</div>
                     <p>GPA: 3.00</p>
                  </div>
                  <div class="resume-date text-md-right">
                     <span class="text-primary">August 2009 - May 2013</span>
                  </div>
               </div>

               <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                  <div class="resume-content">
                     <h3 class="mb-0">University of Richmond</h3>
                     <div class="subheading mb-3">Coding Bootcamp</div>
                     <p>Predicted Completion April 2020</p>
                  </div>
                  <div class="resume-date text-md-right">
                     <span class="text-primary">October 2019 - April 2020</span>
                  </div>
               </div>
            </div>
         </section>

         <hr class="m-0"/>

         <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div class="w-100">
               <h2 class="mb-5">Skills</h2>

               <div class="subheading mb-3">Programming Languages &amp; Tools</div>
               <ul class="list-inline dev-icons">
                  <li class="list-inline-item">
                     <i class="fab fa-html5"></i>
                  </li>
                  <li class="list-inline-item">
                     <i class="fab fa-css3-alt"></i>
                  </li>
                  <li class="list-inline-item">
                     <i class="fab fa-js-square"></i>
                  </li>
                  <li class="list-inline-item">
                     <i class="fab fa-node-js"></i>
                  </li>
                  <li class="list-inline-item">
                     <i class="fab fa-sass"></i>
                  </li>
                  <li class="list-inline-item">
                     <i class="fab fa-npm"></i>
                  </li>
               </ul>

               <div class="subheading mb-3">Workflow</div>
               <ul class="fa-ul mb-0">
                  <li>
                     <i class="fa-li fa fa-check"></i>
                     Mobile-First, Responsive Design</li>
                  <li>
                     <i class="fa-li fa fa-check"></i>
                     Cross Browser Testing &amp; Debugging</li>
                  <li>
                     <i class="fa-li fa fa-check"></i>
                     Cross Functional Teams</li>
                  <li>
                     <i class="fa-li fa fa-check"></i>
                     Agile Development &amp; Scrum</li>
               </ul>
            </div>
         </section>

         <hr class="m-0"/>

         <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
            <div class="w-100">
               <h2 class="mb-5">Interests</h2>
               <p>I am eager to learn new skills, to further my career,
                  but also use coding to express myself artistically. I am inspired by my hobbies; videogames, movies,
                  Dungeons
                  and Dragons, and books. I can't wait to use my new skills to create a website for my D&D group, or make a
                  server to track books on my "to read" list.</p>
               <p class="mb-0">Thanks for visiting my online Portfolio. Please check out my other projects on my <a
                     href="https://github.com/jonesec2" title="Christian Jones gitHub" target="_blank">gitHub</a>, and feel
                  free
                  to contact me with any inquiries about myself or my work.
               </p>
            </div>
         </section>

         <hr class="m-0"/>

      </div>


      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
      <script src="js/resume.min.js"></script>

   </div>
  );
}

export default Navbar;
