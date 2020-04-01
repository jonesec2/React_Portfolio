import React from "react";

function Education() {

   return (

      <div>
         <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
               <h2 className="mb-5">Education</h2>

               <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                     <h3 className="mb-0">Virginia Commonwealth University</h3>
                     <div className="subheading mb-3">Bachelor of Arts in Music</div>
                     <div>Classical Guitar - General Arts in Music</div>
                     <p>GPA: 3.00</p>
                  </div>
                  <div className="resume-date text-md-right">
                     <span className="text-primary">August 2009 - May 2013</span>
                  </div>
               </div>

               <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                  <div className="resume-content">
                     <h3 className="mb-0">University of Richmond</h3>
                     <div className="subheading mb-3">Coding Bootcamp</div>
                     <p>Predicted Completion April 2020</p>
                  </div>
                  <div className="resume-date text-md-right">
                     <span className="text-primary">October 2019 - April 2020</span>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}


export default Education;