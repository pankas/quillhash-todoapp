import React from 'react';
import TodoListItem from './TodoListItem';
import './App.css'

class TodoList extends React.Component {
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
      return (
        <div className="container" >
          <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5">
            <div className="card card-signin my-5 expand" >
              <div className="card-body">
        <ul className="list-group"> {items} </ul>
        </div>
        </div>
        </div>
        </div>
        </div>
      );
    }
  }

export default TodoList