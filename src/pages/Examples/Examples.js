import React, { Component } from "react";
import examples from "../util/examples.json"
import ExampleComponent from "./ExampleComponent";
import Card from "../../components/Card";
import Header from "../../components/Header";


export default class Examples extends Component {

   state = { examples, header: "Examples" }


   handleCard() {
      return examples.map(examples =>
         <ExampleComponent
            title={examples.title}
            h3Title={examples.h3Title}
            github={examples.github}
            deployed={examples.deployed}
            src={examples.src}
            class={examples.class}
            description={examples.description}
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