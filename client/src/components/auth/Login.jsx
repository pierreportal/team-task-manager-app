import React, { Component } from 'react'
import { login } from '../../api'

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state
    login(username, password).then(response => {
      console.log(response)
      this.setState({
        username: "",
        password: ""
      })
    }).catch(err => console.log(err))
  }
  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form className="add-task-form">
        <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
        <input type="password" name="password" placeholder="********" value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Join</button>
      </form>
    )
  }
}
