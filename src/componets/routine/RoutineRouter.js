import React from 'react'
import Routine from './Index'
import Schadule from './schadule/index'
import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/routine">
        <Routine/>
      </Route>
      <Route path="/schadule">
        <Schadule/>
      </Route>
    </Switch>
  )
}

export default HomeRoute