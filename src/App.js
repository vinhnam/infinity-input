import React, { Component } from 'react'
// import './App.css' 
import Items from './Items'

class App extends Component {
   inputElement = React.createRef();
   constructor() {
      super();
      var i = [];
      i.push({ text: "", key: 1 });
      this.state = {
         items: i,
         currentItem: {
            text: "",
            key: 1
         }
      };
   }
   deleteItem = key => {
      this.setState({
         items: this.state.items.filter(item => {
            return item.key !== key;
         })
      });
   };

   handleInput = key => {
      if (key == this.state.currentItem.key) this.addItem();
   };

   addItem = e => {
      const newItem = { text: "", key: Date.now() };
      const items = [...this.state.items, newItem];
      this.setState({
         items: items,
         currentItem: newItem
      });
   };
   render() {
      return (
         <div className="App">
            <Items
               allItems={this.state.items}
               deleteItem={this.deleteItem}
               handleInput={this.handleInput}
               currentItem={this.state.currentItem}
            />
         </div>
      );
   }
}

export default App
