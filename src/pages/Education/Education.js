import React, { Component } from "react";
import education from "../util/education.json"
import Card from "../../components/Card";
import Header from "../../components/Header";
import EducationComponent from "../Education/EducationComponent";

export default class Education extends Component {

   state = {education, header: "Education" }

   handleCard() {
      return education.map(education =>
         <EducationComponent
            title={education.title}
            subTitle={education.subTitle}
            description={education.description}
            description2={education.description2}
            dates={education.dates}
         />
      )
   }

   render() {
      return (

         <Card>
            <Header
               header={this.state.header}
               handleCard={this.handleCard()}
            >
            </Header>
         </Card>
      );
   }
}

