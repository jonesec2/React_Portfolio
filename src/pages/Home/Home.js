import React from "react";
// import "./style.css";

function Home() {

   return (
      <div>
         <div className="container-fluid p-0">
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
               <div className="w-100">
                  <h1 className="mb-0">Christian
                   <span className="text-primary">Jones</span>
                  </h1>
                  <div className="subheading mb-5">Richmond, Virginia · (804) 456-2130 ·
                   <a href="mailto:jonesec2@gmail.com">jonesec2@gmail.com</a>
                  </div>
                  <p className="lead mb-5">I am an experienced Quality Analyst ready to transition from validating applications to
                   creating them.</p>
                  <div className="social-icons">
                     <a href="https://www.linkedin.com/in/edward-christian-jones-4170009b/" rel="noreferrer noopener" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                     </a>
                     <a href="https://github.com/jonesec2">
                        <i className="fab fa-github"></i>
                     </a>
                     <a href="Edward Christian Jones Resume 2019.pdf" rel="noreferrer noopener" target="_blank">
                        <i className="fas fa-file-pdf"></i>
                     </a>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
}

export default Home;

