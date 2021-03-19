import React from 'react'
import Courses from './Index'
import ViewCourses from './viewcourse/index'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from 'react-protected-route-component';

const HomeRoute = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/courses"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <Courses />}
        exact
      />
      <ProtectedRoute
        path="/details"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <ViewCourses />}
        exact
      />
      <Redirect to="/" />
    </Switch>
  )
}

export default HomeRoute
