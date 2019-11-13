import React, { Component } from 'react'
import axios from 'axios'
export default class Task extends Component {
  state = {
    id: this.props.task._id,
    title: this.props.task.title,
    description: this.props.task.description
  }
  handleDelete = () => {
    axios.get(`/task/delete/${this.state.id}`).then(() => {
      this.props.updateTasks()
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <div className='task'>
        <div className='task-header'>
          <div className="team-ico-small"></div>
          <p>{this.state.title}</p>
          <button onClick={this.handleDelete}>x</button>
        </div>
        <div className='task-body'>
          <p>{this.state.description}</p>
        </div>
      </div>
    )
  }
}
