import React, { Component } from 'react'
import { Card, Col, Row } from 'antd';
import axios from 'axios'
import renderHTML from 'react-render-html'
class Contacts extends Component {
    state = {
        loan:undefined,
        err:''
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
      console.log(this.state)
      let {loan} = this.state
    return (
                <>
                <input type="text" maxLength="15" defaultValue="" 
                    style={{width:'22%',marginBottom:"16px",borderRadius:'4px',border:'1px grey solid',textAlign:'center'}} 
                 placeholder="Find Member" 
                 onBlur={(e)=>this.onSearchChange(e.target.value.toLowerCase())}/>
                {
                    this.state.loan ? 
                    <Row gutter={16}>
                        <Col span={8} offset={8}>
                            <Card title={`Member ID : ${loan.member_id} Status : ${loan.verification_status}` } bordered={true}>
                                <p><b>Description: </b>{renderHTML(loan.desc)}</p>
                                <p><b>Loan Amount: </b>{loan.loan_amnt}</p>
                                <p><b>Annual Income: </b>{loan.annual_inc}</p>
                                <p><b>Funded Investment Amount: </b>{loan.funded_amnt_inv}</p>
                                <p><b>Term </b>{loan.term}</p>
                                <p><b>Interest rate </b>{loan.int_rate}</p>
                                <p><b>Grade </b>{loan.grade}</p>
                            </Card>
                        </Col>
                    </Row> : null
                }
                </>
    )
  }
}


export default Contacts