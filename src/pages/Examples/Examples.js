import React, {Component} from "react";
import examples from "../util/examples.json"
import ExampleComponent from "./ExampleComponent";
import Card from "../../components/Card";
import Header from "../../components/Header";


export default class Examples extends Component {

   state =examples

   // useState for this section
   //declare examples as part of state

   handleExamples() {
      return examples.map(examples =>
         <ExampleComponent
            title={examples.title}
            h3Title={examples.h3Title}
            github={examples.github}
            deployed={examples.deployed}
            src={examples.src}
            description={examples.description}
         />
      )
   }

   render() {
      return (
         <Card>
            <Header
            handleExamples={this.handleExamples()}>

            </Header>
         </Card>
      );
   }
}