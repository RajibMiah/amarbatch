import React from 'react'
import Home from './Index'
import ProtectedRoute from 'react-protected-route-component'
import AllStudent from './allstudent/index'
import {
  Switch,
  Redirect,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <Home />}
        exact
      />
      <ProtectedRoute
        path="/allstudent"
        redirectRoute="/login"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <AllStudent />}
        exact
      />
      <Redirect to="/" />
    </Switch>
  )
}

export default HomeRoute
