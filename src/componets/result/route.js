import React from 'react'
import Result from './Index'
import ViewResult from './viewresult/index'
import {
  Switch,
  Route,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/result">
        <Result />
      </Route>
      <Route path="/view-result">
        <ViewResult/>
      </Route>
    </Switch>
  )
}
export default HomeRoute