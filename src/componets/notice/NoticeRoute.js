import React from 'react'
import Notice from './Index'
import ViewDetails from './viewdetails/index'
import {
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoute from 'react-protected-route-component';

const HomeRoute = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/notice"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <Notice />}
        exact
      />

      <ProtectedRoute
        path="/noticedetails"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <ViewDetails />}
        exact
      />
    </Switch>
  )
}

export default HomeRoute
