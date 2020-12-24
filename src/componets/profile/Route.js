import React from 'react'
import Profile from './Index'
import EditProfile from './editprofile/Index'
import {
  Switch,
  Route,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/profile">
        <Profile/>
      </Route>
      <Route exact path="/edit-profile">
        <EditProfile/>
      </Route>
    </Switch>
  )
}
export default HomeRoute