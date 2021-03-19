import React from 'react'
import { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  <Route
    {...rest}
    render={props => {
      const currentUser = false
      if (!currentUser) {
        return <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }

          }}
        />
      } else {
        return <Redirect to={{
          pathName: "/"
        }}
        />
      } 
    }}

  />
}