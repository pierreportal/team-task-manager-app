import './App.css';

import React, { Component } from 'react'
import Routing from './components/Routing'
import Navbar from './components/Navbar'


export default class App extends Component {
  state = {
    user: this.props.user
  }
  render() {
    // const updateHeader = heading => {
    //   this.setState({
    //     headTitle: heading
    //   })
    // }
    console.log(this.state.user)
    return (
      <div className="App">
        <Navbar user={this.state.user} />
        <Routing /*updateHeader={() => this.updateHeader}*/ user={this.state.user} />
      </div>
    )
  }
}
