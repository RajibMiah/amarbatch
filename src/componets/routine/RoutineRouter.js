import React from 'react'
import Routine from './Index'
import Schadule from './schadule/index'
import {
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from 'react-protected-route-component';

const HomeRoute = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/routine"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <Routine />}
        exact
      />
      <ProtectedRoute
        path="/schadule"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <Schadule />}
        exact
      />
       <Redirect to="/" />
    </Switch>
  )
}

export default HomeRoute