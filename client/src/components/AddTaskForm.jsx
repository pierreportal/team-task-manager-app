import React, { Component } from 'react'

export default class AddTaskForm extends Component {
  state = {
    title: "",
    description: "",
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const task = this.state
    this.props.addTask(task)
  }
  render() {
    return (
      <form className="add-task-form" onSubmit={this.handleSubmit} >
        <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
        <input type="text" name="description" placeholder="Description..." value={this.state.description} onChange={this.handleChange} />
        {this.state.title.length && this.state.description.length ? <button type="submit">Add</button> : <button type="submit">Cancel</button>}
      </form>
    )
  }
}
