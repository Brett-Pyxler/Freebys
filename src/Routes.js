import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </Switch>
  )
}
