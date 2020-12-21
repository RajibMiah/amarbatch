import React from 'react'
import Courses from './Index'
import ViewCourses from './viewcourse/index'
import {
  Switch,
  Route,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/courses">
        <Courses />
      </Route>
      <Route exact path="/details">
        <ViewCourses/>
      </Route>
    </Switch>
  )
}

export default HomeRoute
