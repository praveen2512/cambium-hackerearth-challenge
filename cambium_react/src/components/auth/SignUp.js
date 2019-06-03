import React from 'react';
import {Form, Icon, Input, Button,Row,Col,Card,Alert} from 'antd';
import {connect} from 'react-redux'
import {signup} from '../../store/actions/signup'
import {clearError} from '../../store/actions/clearError'
import {Redirect,withRouter} from 'react-router-dom'
  class SignUp extends React.Component {

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          let params = {}
          params.name = e.target[0].value
          params.email = e.target[1].value
          params.password = e.target[2].value
          this.props.signup(params)
        }
      });
    }

    redirectToSignIn = ()=>{
      let path = `/`
      this.props.history.push(path)
    }
    render() {
        if(this.props.authStore.token){
            return <Redirect to="/home"/>
        }
        let {msg} = this.props.authStore
      const { getFieldDecorator } = this.props.form;
      return (
        <>
        <div className="App">
          <Row>
            <Col span={12} offset={6}>
              <Card>
              {msg ? <Alert type="error" message={msg} closable onClose={
         ()=>{
            this.props.clearError()
         }
       }/>:null}
        <Form onSubmit={this.handleSubmit} className="login-form">
        Sign up with Email
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block >
              Sign Up
            </Button>
            <br/>
            Already having an account !
            <br/>
            <Button type="primary" htmlType="submit" className="login-form-button"
            onClick={
              ()=>{
                this.redirectToSignIn()
              }
            }
            block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
        </Card>
            </Col>
          </Row>
        </div>
        </>
      );
    }
  }
  const mapStateToProps = (state)=>{
      return {
        authStore : state.authStore
      }
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
        signup : (formData)=>dispatch(signup(formData)),
        clearError : ()=>dispatch(clearError())
    }
  }

  const SignUpForm = Form.create({ name: 'normal_login' })(SignUp);

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignUpForm))