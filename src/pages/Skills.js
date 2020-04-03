import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
// import Card from "../components/Header";
// import Header from "../components/Card";


export default function Skills() {

   return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
         <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">
               <li className="list-inline-item">
                  {/* <FontAwesomeIcon icon={faCode} /> */}
               </li>
               <li className="list-inline-item">
                  <i className="fab fa-css3-alt"></i>
               </li>
               <li className="list-inline-item">
                  <i className="fab fa-js-square"></i>
               </li>
               <li className="list-inline-item">
                  <i className="fab fa-node-js"></i>
               </li>
               <li className="list-inline-item">
                  <i className="fab fa-sass"></i>
               </li>
               <li className="list-inline-item">
                  <i className="fab fa-npm"></i>
               </li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
               <li>
                  <FontAwesomeIcon icon={faCheck} /> Mobile-First, Responsive Design
               </li>
               <li>
                  <FontAwesomeIcon icon={faCheck} />Cross Browser Testing &amp; Debugging
               </li>
               <li>
                  <FontAwesomeIcon icon={faCheck} /> Cross Functional Teams
               </li>
               <li>
                  <FontAwesomeIcon icon={faCheck} />Agile Development &amp; Scrum
               </li>
            </ul>
         </div>
      </section>

   );
}
