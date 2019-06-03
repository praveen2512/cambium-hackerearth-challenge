import React, { Component } from 'react'
import {  Menu ,Layout,Spin} from 'antd';
import {signOut} from '../../store/actions/signOut'
import {connect} from 'react-redux'
import '../../App.css'

const {Header} = Layout
class NavBar extends Component {
    componentWillMount(){

    }
  render() {
    let username = this.props.userStore.userDetail.name
    return (
        <Header>
        <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" onClick={(e)=>{
             console.log(e)
            }}>Home
            </Menu.Item>
            <Menu.Item style={{float:'right'}}>
            { username ?`Welcome ${username} ` : <Spin size="small"/>}
              <button className="ant-btn" style={{float:'right',top:'8px',background:'transparent',color:'#40a9ff',borderColor:'#40a9ff',height:'48px',marginLeft:'12px'}}
                    onClick={(e)=>{
                    e.preventDefault()
                    this.props.signOut()
                    }}
                    >
                    Sign Out
                </button>
            </Menu.Item>
          </Menu>
      </Header>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
      authStore : state.authStore,
      userStore : state.userStore
    }
}
export default connect(mapStateToProps,{signOut})(NavBar)

/* { username ?`Welcome ${username} ` : <Spin size="small"/>} */