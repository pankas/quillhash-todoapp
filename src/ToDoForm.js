import React from 'react';
import './App.css'

class ToDoForm extends React.Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }
      componentDidMount() {
        this.refs.itemName.focus();
        this.refs.itemValue.focus();
      }
      onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;
        var newItemDescription = this.refs.itemValue.value
        if(newItemValue) {
          this.props.addItem({newItemValue,newItemDescription});
          this.refs.form.reset();
        }
      }
      render () {
        return (
          <div className="container" >
          <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5">
            <div className="card card-signin my-5  expand">
              <div className="card-body">
              {/* <h5 className="card-title text-center">Login</h5> */}
          <form ref="form" onSubmit={this.onSubmit} className="form-signin">
          <div classNameName="form-label-group">
          {/* <span className="glyphicon glyphicon-ok" aria-hidden="true" onClick={this.onClickDone}/> */}
          <label>Title</label>
          <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
          </div>
           <div classNameName="form-label-group">
           <label>Enter details about task</label>
            <textarea rows="4" cols="50" ref="itemValue" className="form-control" placeholder="enter description">
            </textarea>
            </div>
            <br/>
            <button class="btn btn-sm btn-primary btn-block text-uppercase"  type="submit">Add</button>
            {/* <button type="submit" className="btn btn-default">Add</button>  */}
          </form>
          </div>
          </div>
          </div>
          </div>
          </div>
        );   
      }
    }
      
export default ToDoForm;
