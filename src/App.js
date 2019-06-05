import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './components/login';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { PageHeader } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];


 class App extends React.Component {


  render() {
    return (
      <div>
      <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <PageHeader title="Ecomerce App" breadcrumb={{ routes }} />
      <p></p>
      <Login></Login>
      </Col>
        <Col span={8}></Col>
      </Row>
    </div>
    )
 }
 }


export default App;
