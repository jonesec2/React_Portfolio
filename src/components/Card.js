import React from "react";
import '../App.css';

export default function Card(props) {

   return (
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center">
         {props.children}
      </section>
   );
}