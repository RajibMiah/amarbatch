import React from 'react'
import TabIndex from './componets/tab/TabIndex'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignIn from './componets/auth/signin/Index';
import SignUp from './componets/auth/signup/Index'
import ForgetPassword from './componets/auth/forgetpassword/Index'



const App = () => {
  return (
    <Switch>
      <Route exact path="/signin" render={(props) => <SignIn {...props}/> } />
      <Route exact path="/signup" render={(props) => <SignUp {...props}/> }/>
      <Route exact path="/forgetpassword" render={(props) => <ForgetPassword {...props}/> } />
      <Route path='/'>
        <TabIndex />
      </Route>

    </Switch>
  )
}

export default App

