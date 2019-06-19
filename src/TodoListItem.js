import React from 'react';
import './App.css'


class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoDescription: false,
      }
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
      this.showDescription = this.showDescription.bind(this);
    }

    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }

    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    } 

    showDescription(){
        this.setState({
          todoDescription: !this.state.todoDescription
        });
    }

    render () {
      var todoClass = this.props.item.done ? 
          "done" : "undone";
      return(
        <li className="list-group-item " onClick={this.showDescription}>
          <div className={todoClass}>
            <span className="glyphicon glyphicon-ok" aria-hidden="true" onClick={this.onClickDone}></span>
            {this.props.item.value}
            {/* <hr/> */}
          {this.state.todoDescription?
            <div>Description:
            {this.props.item.description}
            </div>:null}
            <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
            {/* <hr/> */}
          </div>
        </li>     
      );
    }
  }

  export default TodoListItem;