import React from 'react';
import {Form, Icon, Input, Button,Alert} from 'antd';
import {connect} from 'react-redux'
import {authenticate} from '../../store/actions/authenticate'
import {clearError} from '../../store/actions/clearError'
import {Redirect,withRouter} from 'react-router-dom'
  class Login extends React.Component {


    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields(async (err, values) => {
        if (!err) {
          let params = {}
          params.email = e.target[0].value
          params.password = e.target[1].value
          this.props.authenticate(params)
         
        }
      });
    }

    redirectToSignUp = ()=>{
      let path = `signup`
      this.props.history.push(path)
    }
    render() {
        if(this.props.authStore.token){
            return <Redirect to="/home"/>
        }
      const { getFieldDecorator } = this.props.form;
      let {msg} = this.props.authStore
      return (
        <>
       {msg ? <Alert type="error" message={msg} closable onClose={
         ()=>{
            this.props.clearError()
         }
       }/>:null}
        <Form onSubmit={this.handleSubmit} className="login-form">
        Sign in with Email
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
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
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              Sign in
            </Button>
           Wish to join ! Then sign up
            <Button type="primary" className="login-form-button"
            onClick={
              ()=>{
                this.redirectToSignUp()
              }
            }
            block>
             Sign up
            </Button>
          </Form.Item>
        </Form>
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
        authenticate : (formData)=>dispatch(authenticate(formData)),
        clearError : ()=>dispatch(clearError())
    }
  }

  const LoginForm = Form.create({ name: 'normal_login' })(Login);

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginForm))