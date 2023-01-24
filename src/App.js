import React from "react";
import "./App.css";
import Artikel from "./Artikel";

export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         liste: [],
         eingabe: { name: "", menge: "" },
      };
   }

   addItem(e) {
      e.preventDefault();

      const newItem = {
         ...this.state.eingabe, // name: this.state.eingabe.name, menge: this.state.eingabe.menge
         id: this.state.liste.length + 1,
      };

      this.setState({
         liste: [...this.state.liste, newItem],
      });
   }

   setInput(e) {
      const { name, value } = e.target;
      this.setState({
         eingabe: {
            ...this.state.eingabe,
            [name]: value,
         },
      });
   }

   render() {
      return (
         <div>
            <h1>Einkaufsliste</h1>
            <form className="d-flex gap-2" onSubmit={this.addItem.bind(this)}>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.eingabe.name}
                  onChange={this.setInput.bind(this)}
               />
               <input
                  type="number"
                  name="menge"
                  placeholder="Menge"
                  value={this.state.eingabe.menge}
                  onChange={this.setInput.bind(this)}
               />
               <button
                  className="bg-success border border-success text-white"
                  type="submit"
                  title="hinzufügen"
               >
                  +
               </button>
            </form>
            <ul>
               {this.state.liste.map((element) => (
                  <Artikel
                     key={element.id}
                     name={element.name}
                     menge={element.menge}
                  />
               ))}
            </ul>
         </div>
      );
   }
}
