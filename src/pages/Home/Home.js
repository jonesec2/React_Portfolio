import React from "react";
import Card from "../../components/Card";

function Home() {

   return (
      <Card>
         <div className="w-100">
            <h1 className="mb-0">Christian
                   <span className="text-primary">Jones</span>
            </h1>
            <div className="subheading mb-5">Richmond, Virginia · (804) 456-2130 ·
                   <a href="mailto:jonesec2@gmail.com"> jonesec2@gmail.com</a>
            </div>
            <p className="lead mb-5">I am an experienced Quality Analyst ready to transition from validating applications to
                   creating them.</p>
               <p className="lead mb-5">This portfolio was created using a Bootstrap template created by <a href="https://startbootstrap.com/themes/resume/" rel="noopener noreferrer" target="_blank">Start Bootstrap</a>.</p>
            <div className="social-icons">
               <a href="https://www.linkedin.com/in/edward-christian-jones-4170009b/" rel="noreferrer noopener" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
               </a>
               <a href="https://github.com/jonesec2" rel="noreferrer noopener" target="_blank">
                  <i className="fab fa-github"></i>
               </a>
               <a href="Edward Christian Jones Resume 2020.pdf" rel="noreferrer noopener" target="_blank">
                  <i className="fas fa-file-pdf"></i>
               </a>
            </div>
         </div>
      </Card>
   );
}

export default Home;

