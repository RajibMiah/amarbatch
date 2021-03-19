import React from 'react'
import Profile from './Index'
import EditProfile from './editprofile/Index'
import {
  Switch,
  Route,
} from "react-router-dom";
import ProtectedRoute from 'react-protected-route-component';

const HomeRoute = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/profile"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <Profile />}
        exact
      />
      <ProtectedRoute
        path="/edit-profile"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <EditProfile />}
        exact
      />
    </Switch>
  )
}
export default HomeRoute