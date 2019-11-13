import React, { Component } from 'react'
import routes from '../routes'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Navbar extends Component {
  state = {
    team: null
  }
  componentDidMount = () => {
    axios.get('/team').then(response => {
      this.setState({
        team: response.data
      }, () => console.log(this.state.team))
    })
  }
  render() {
    const team = this.state.team && this.state.team.map(x => {
      return <div key={x.username} className="team-ico-small" style={{ 'backgroundImage': `url(${x.picture})` }} alt={x.firstname} />
    })
    const links = routes.map(x => {
      return x.subRoutes ? <ul>{x.subRoutes.map(x => <li key={x.label}><Link to={x.path}>{x.label}</Link></li>)}</ul> : <li key={x.path}><Link to={x.path}>{x.label}</Link></li>
    })
    return (
      <div className="navbar" >
        <div>
          {team}
        </div>
        <ul>
          <li>Noti</li>
          {links}
        </ul>
      </div>
    )
  }
}
