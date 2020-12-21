import React from 'react'
import Notice from './Index'
import ViewDetails from './viewdetails/index'
import {
  Switch,
  Route,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/notice">
        <Notice />
      </Route>
      <Route path="/noticedetails">
        <ViewDetails/>
      </Route>
    </Switch>
  )
}

export default HomeRoute
