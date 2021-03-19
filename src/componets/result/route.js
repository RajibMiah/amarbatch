import React from 'react'
import Result from './Index'
import ViewResult from './viewresult/index'
import {
  Switch,
} from "react-router-dom";
import ProtectedRoute from 'react-protected-route-component';

const HomeRoute = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/result"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() => <Result />}
        exact
      />
      <ProtectedRoute
       path="/view-result"
        redirectRoute="/signin"
        guardFunction={() => {
          const token = localStorage.getItem('authToken');
          if (token) {
            return true;
          } else {
            return false;
          }
        }}
        component={() =>  <ViewResult />}
        exact
      />
    </Switch>
  )
}
export default HomeRoute