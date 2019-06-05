import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { notification } from 'antd';
import { Redirect } from 'react-router'

 


 class Login extends React.Component {

    state = {
        user: []
    };


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }

      axios.post('http://localhost:5000/auth/login', {
        email: values.username,
        password: values.password
        })
        .then(res => {
            this.setState({ user: res.data.user});
            notification.open({
                message: 'Loggin succes',
                description:
                  'Loggin succes'
              });
              window.location='/productList';
        })
        .catch(error => {
            notification.open({
                message: 'Loggin failed',
                description:
                  'Loggin failed'
              });
        })
    });

    
  };


  render() {
    const { getFieldDecorator } = this.props.form;
   return (
    <div>
      
    <Form onSubmit={this.handleSubmit} className="login-form">
    <Form.Item>
      {getFieldDecorator('username', {
        rules: [{ required: true, message: 'Please input your username!' }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Please input your Password!' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(<Checkbox>Remember me</Checkbox>)}
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </Form.Item>
  </Form>
  
  </div>
   );
  }
 }

 const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Login);

export default WrappedHorizontalLoginForm;