import React, { Component } from 'react'
import routes from '../routes'
import { Switch, Route } from 'react-router-dom'

export default class Routing extends Component {
  state = {
    user: this.props.user
  }
  render() {
    const redRoutes = routes.reduce((a, b) => {
      if (b.subRoutes) return a.concat(b.subRoutes)
      return a.concat(b)
    }, [])

    const routesMap = redRoutes.map(x => {

      return <Route key={x.path} path={x.path} exact={x.exact} render={() => <x.component user={this.state.user} />} />
    })
    return (
      <div>
        <Switch>
          {routesMap}
        </Switch>
      </div>
    )
  }
}
