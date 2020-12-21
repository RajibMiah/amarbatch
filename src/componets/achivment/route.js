import React from 'react'
import Achivement from './Index'
import ViewAchivement from './viewachivement/index'
import {
  Switch,
  Route,
} from "react-router-dom";

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path="/achivement">
        <Achivement />
      </Route>
      <Route path="/viewachivement">
        <ViewAchivement/>
      </Route>
    </Switch>
  )
}

export default HomeRoute