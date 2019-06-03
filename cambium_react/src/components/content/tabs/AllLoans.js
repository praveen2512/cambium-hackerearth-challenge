import React, { Component } from 'react'
import {List,Spin,Row,Col,Card,Button } from 'antd';
import axios from 'axios'
import {connect} from 'react-redux'
import {getLoanDetails} from '../../../store/actions/loanDetail/getLoanDetails'
class AllLoans extends Component {
    state = {
        loan:undefined,
        err:''
    }
    componentDidMount(){
        this.props.getLoans()
    }
    onGetDetail = (id)=>{
        this.props.pushPage(`/loanDetail/${id}`)
    }
    onSearchChange = (searchKey)=>{
        if(!(searchKey === '')){
        let token = localStorage.getItem('token')
        const headers ={
            headers:{
                "Content-Type":"application/json",
                "Token":token
            }
        }
        axios.get(`/getLoans/${searchKey}`,headers).then(res=>{
            console.log(res.data)
            this.setState({loan:res.data[0]})
        }).catch((err)=>{
            this.setState({err:err.response.msg})
        })
    }else{
        this.setState({loan:undefined})
    }
    }
  render() {
      let {loans} = this.props
      console.log(this.props)
    return (
                <>
                {
                    loans.length ? <List
                    itemLayout="horizontal"
                    grid={{
                        gutter: 48, xs: 1, sm: 12, md: 4, lg: 4
                    }}
                    dataSource={loans}
                    pagination={{
                        pageSize:12
                    }}
                    renderItem={loan => (
                    <List.Item>
                        <Row grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,}}>
                        <Col span={12} offset={4}>
                            <Card title={`ID: ${loan.member_id}`} style={{width:210}}>
                                <p><b>Loan Amt </b>{loan.loan_amnt}</p>
                                <p><b>Term </b>{loan.term}</p>
                                <p><b>Interest rate </b>{loan.int_rate}</p>
                                <p><b>Grade </b>{loan.grade}</p>
                                <p><b>Verfication status </b>{loan.verification_status}</p>
                                <Button onClick={()=>{this.onGetDetail(loan.member_id)}}>Get Detail</Button>
                            </Card>
                        </Col>
                        </Row>
                    </List.Item>
                    )}
                    />: <Spin size="large"/>
                }
                </>
    )
  }
}

const mapStateToProps = (state)=>{
    return {
        loans : state.userStore.loans
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        getLoans : ()=>dispatch(getLoanDetails())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllLoans)