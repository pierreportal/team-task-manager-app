import React, { Component } from 'react'
import Task from './Task'
import AddTaskForm from './AddTaskForm'
import axios from 'axios'

export default class TaskMap extends Component {
  state = {
    user: this.props.user, // get loggedIn user
    tasks: [],
    showAddTaskForm: false
  }
  componentDidMount = () => {
    this.updateTasks()
  }

  updateTasks = () => {
    console.log("UPDATE")
    axios.get('/task').then(response => {
      this.setState({ tasks: response.data }, () => console.log(this.state.tasks))
    }).catch(err => console.log(err))
  }

  handleAddTask = () => {
    this.setState({
      showAddTaskForm: true
    })
  }

  addTask = newTask => {
    newTask.title.length && newTask.description.length &&
      axios.post('/task/create', { ...newTask, user: this.state.user }).then(response => {
        // console.log(response.data)
        this.updateTasks()
      }).catch(err => console.log(err))

    this.setState({
      showAddTaskForm: false
    })
  }

  render() {
    let tasks = this.state.tasks && this.state.tasks.map((x) => {
      return (

        <Task key={x._id} task={x} updateTasks={this.updateTasks} />

      )
    })


    console.log(this.state.user)
    return (
      < div className="map" >
        {this.state.showAddTaskForm && <AddTaskForm addTask={this.addTask} />}
        {this.state.user && <div className="map-face-icon" style={{ 'backgroundImage': `url(${this.state.user.picture})` }}></div>}
        <button className="add-task-btn" onClick={this.handleAddTask}></button>
        {tasks}
      </div >
    )
  }
}
