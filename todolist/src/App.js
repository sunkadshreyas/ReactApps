import React from 'react';
import logo from './logo.svg';
import './App.css';

const todos = [
  {
      task : 'Grocery',
      id : 1
  },
  {
      task : 'Laundry',
      id : 2
  },
]

class App extends React.Component{
  constructor(){
      super();
      this.state = {
          tasks : todos,
          task : "",
          id : null,
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event){
      const {name,value} = event.target
      this.setState({
          [name] : value
      })
  }
  handleSubmit(event){
      const newTask = {
          task : this.state.task,
          id : this.state.id
      }
      this.setState({
          tasks : [...this.state.tasks,newTask],
          task : "",
          id : this.state.id + 1
      })
      event.preventDefault()
  }
  handleDelete(event){
      const deletedtasks = [...this.state.tasks]
      for(var index=0;index<deletedtasks.length;index++){
          if(deletedtasks[index].task === event.target.value){
              deletedtasks.splice(index,1)
          }
      }
      this.setState({
          tasks : deletedtasks
      })
  }
  render(){
      var todosComponent = this.state.tasks.map(task => {
          return (
              <div className="todoItem">
                  <span className="task" key={task.id}>{task.task}</span>
                  <button className="delete" value={task.task} onClick={this.handleDelete}>X</button>
              </div>
          );
      })
      return(
          <div className="todoList">
              {todosComponent}
              <form class="todoForm" onSubmit={this.handleSubmit}>
                  <input
                      type="text"
                      name="task"
                      className="input"
                      value={this.state.task}
                      placeholder="Enter task.."
                      onChange={this.handleChange} 
                  />
                  <button className="add">Add</button>
              </form>
          </div>
      );
  }
}

export default App;
