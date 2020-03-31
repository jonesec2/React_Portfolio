import React from "react";

export default function Experience() {

   return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
         <div className="w-100">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-0">Senior Quality Analyst</h3>
                  <div className="subheading mb-3">Virginia Retirement System through UDig</div>
                  <p>Manual User Interface testing and ETL backend validations. Working closely within an Agile Scrum
                  Team to
                     fulfill client needs.</p>
               </div>
               <div className="resume-date text-md-right">
                  <span className="text-primary">December 2019 - Present</span>
               </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-0">Quality Analyst</h3>
                  <div className="subheading mb-3">Advantasure</div>
                  <p>Using the SAFe Agile approach our Scrum Team created ACA Compliant Enterprise Software; the first
                  of it's
                     kind to exist in the online marketplace.</p>
                  <p>I was in charge of creating mock data, test plans / cases, and testing scenarios. My day to day
                  looked
                  like testing complicated Medical Insurance logic through SQL queries, and validating UI was
                  correctly
                     displaying the information from our backend SQL structure. </p>
               </div>
               <div className="resume-date text-md-right">
                  <span className="text-primary">August 2017 - December 2019</span>
               </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
               <div className="resume-content">
                  <h3 className="mb-0">Sample Coordinator</h3>
                  <div className="subheading mb-3">Scientific Analytical Institute</div>
                  <p>Working closely within a small team, we triaged packages from hundreds of companies and tracked
                  their
                     details for various mineral testings. Meticulous detail and coordination were key to success.</p>
               </div>
               <div className="resume-date text-md-right">
                  <span className="text-primary">June 2017 - August 2017</span>
               </div>
            </div>

         </div>

      </section>
   )
}