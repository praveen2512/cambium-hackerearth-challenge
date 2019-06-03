import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './App'
import Home from './Home'
import SignUp from './components/auth/SignUp'
import LoanDetail from './components/content/LoanDetail'
export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/home" component={Home}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/loanDetail/:id" component={LoanDetail}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
