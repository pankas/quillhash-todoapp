import React from  'react';
import TodoHeader from './ToDoHeader';
import TodoForm from './ToDoForm';
import TodoList from './TodoList';

var todoItems = [];
todoItems.push({index: 1, value: "learn react",description:'happy hacking', done: false});
todoItems.push({index: 2, value: "Quill Hash task",description:'on its way', done: true});
// todoItems.push({index: 3, value: "buy flowers",description:'flower', done: true});

class ToDoApp extends React.Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.state = {todoItems: todoItems};
    }
    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        description: todoItem.newItemDescription,
        done: false
      });
      this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    markTodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({todoItems: todoItems});  
    }
    render() {
      return (<div>
        <TodoHeader />
        <div id="main">
          <TodoForm addItem={this.addItem} />
          {/* <span class="glyphicon glyphicon-print"></span> */}
          <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        </div>
        </div>
      );
    }
  }
  
  export default ToDoApp;