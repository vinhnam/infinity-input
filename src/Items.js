import React, { Component } from 'react'

class Items extends Component {
   onChangeHandler = item => {
      return (
         <div class="col-md-12" key={item.key}>
            <div class="form-group">
               <div class="input-group">
                  <input
                     class="form-control"
                     placeholder="write something, please"
                     defaultValue={item.text}
                     onChange={() => this.props.handleInput(item.key)}
                  />
                  <div class="input-group-btn">
                     {item.key !== this.props.currentItem.key ? (
                        <button
                           type="button"
                           class="btn btn-danger"
                           onClick={() => this.props.deleteItem(item.key)}
                        >
                           &times;
                        </button>
                     ) : null}
                  </div>
               </div>
            </div>
         </div>
      );
   };
   render() {
      var Entries = this.props.allItems;
      const listItems = Entries.map(this.onChangeHandler);
      return <div>{listItems}</div>;
   }
}

export default Items
