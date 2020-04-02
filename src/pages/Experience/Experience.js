import React, { Component } from "react";
import experiences from "../util/experience.json";
import ExperienceComponent from "./ExperienceComponent";
import Card from "../../components/Card";
import Header from "../../components/Header";


export default class Experience extends Component {

   state = { experiences, header: "Experience" }

   handleCard() {
      return experiences.map(experience =>
         <ExperienceComponent
            title={experience.title}
            subTitle={experience.subTitle}
            description={experience.description}
            dates={experience.dates}
         />
      )
   }

   render() {
      return (
         <Card>
            <Header
               header={this.state.header}
               handleCard={this.handleCard()}>
            </Header>
         </Card>
      );
   }
}