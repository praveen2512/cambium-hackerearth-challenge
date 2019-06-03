import React, { Component } from 'react'
import { Card,Row,Col,Spin } from 'antd';
import axios from 'axios'
import renderHTML from 'react-render-html'
export default class GameDetail extends Component {
    state = {
        loan: {}
    }
    componentDidMount(){
        let token = localStorage.getItem('token')
        const { match: { params } } = this.props;
        const headers ={
            headers:{
                "Content-Type":"application/json",
                "Token":token
            }
        }
        axios.get(`/getLoans/${params.id}`,headers).then(res=>{
            this.setState({loan:res.data[0]})
        })
    }
    render() {
        let {loan} = this.state
        return (
            <div>
               <Row grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,}}>
                   <Col span={12} offset={6}>
                       { 
                       
                       loan ? <Card title={`Member ID : ${loan.member_id}`} style={{ width: 600 }}>
                            <p><b>Loan Amount </b>{loan.loan_amnt}</p>
                            <p><b>Funded amount inv </b>{loan.funded_amnt_inv}</p>
                            <p><b>Term </b>{loan.term}</p>
                            <p><b>Interest rate </b>{loan.int_rate}</p>
                            <p><b>Installment </b>{loan.installment}</p>
                            <p><b>Grade </b>{loan.grade}</p>
                            <p><b>Emp title </b>{loan.emp_title}</p>
                            <p><b>Emp length </b>{loan.emp_length}</p>
                            <p><b>Home ownership </b>{loan.home_ownership}</p>
                            <p><b>Issued </b>{loan.issue_d}</p>
                            <p><b>Loan Status </b>{loan.loan_status}</p>
                            <p><b>Desc </b>{loan.desc ? renderHTML(loan.desc) : loan.desc}</p>
                            <p><b>Purpose </b>{loan.purpose ? renderHTML(loan.purpose) : loan.purpose}</p>
                            <p><b>Title </b>{loan.title}</p>
                            <p><b>Address state </b>{loan.addr_state}</p>
                            <p><b>Last payment D </b>{loan.last_pymnt_d}</p>
                            <p><b>Last payment amnt </b>{loan.last_pymnt_amnt}</p>
                        </Card> : <Spin/>}
                    </Col>
                </Row>
            </div>
        )
    }
}
