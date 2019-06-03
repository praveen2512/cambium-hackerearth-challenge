import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import './App.css'
import {signOut} from './store/actions/signOut'
import NavBar from './components/navbar/NavBar'
import Main from './components/content/Main'
//import Footer from './components/content/Footer'
import {getUserDetail} from './store/actions/userDetails/getUserDetail'

class Home extends Component {
  state={
    loggedOut:false
  }
  pushPage = (route)=>{
    this.props.history.push(route)
  }
  componentWillMount(){
    this.props.getUserDetail()
  }
  render() {    
    if(!this.props.authStore.token || this.state.loggedOut){
      return  <Redirect to="/"/>
    }
    return (
      <Layout className="layout">
          <NavBar/>
          <Main pushPage={this.pushPage}/>
      </Layout>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      authStore : state.authStore
    }
}
export default connect(mapStateToProps,{signOut,getUserDetail})(Home)
