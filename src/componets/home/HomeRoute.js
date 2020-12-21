import React from 'react'
import Home from './Index'
import AllStudent from './allstudent/index'
import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/allstudent">
        <AllStudent/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default HomeRoute
