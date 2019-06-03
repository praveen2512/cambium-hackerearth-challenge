import React, { Component } from 'react'
import { Layout,PageHeader } from 'antd';
import { Tabs } from 'antd';
import LoanList from './tabs/LoanList'
import AllLoans from './tabs/AllLoans'
import {connect} from 'react-redux'
const TabPane = Tabs.TabPane;
const {  Content } = Layout;
 class Main extends Component {
  render() {    
    return (
      <Content style={{ margin: '12px 12px 0', overflow: 'initial' }}>
        <PageHeader
          title="Welcome !"
        />
        <div style={{ padding: 12, background: '#fff', textAlign: 'center' }}>
          <Tabs defaultActiveKey="1">
          <TabPane tab="All Loans" key="1">
              <AllLoans pushPage={this.props.pushPage}/>
            </TabPane>
            <TabPane tab="Search" key="2">
              <LoanList/>
            </TabPane>
          </Tabs>
        </div>
      </Content>
    )
  }
}
const mapStateToProps = (state)=>{
 return {
   userStore : state.userStore
  }
}

export default connect(mapStateToProps,null) (Main)