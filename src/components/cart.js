import React, { Component } from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import CartList from './cartList'
import { PageHeader } from 'antd';

 class Cart extends React.Component {


  render() {
    return (
      <div>
          <Row>
              <Col span={8}></Col>
              <Col span={8}><PageHeader onBack={() => null} title="Seleccione productos" subTitle="Puede agregarlos a favoritos" /></Col>
              <Col span={8}></Col>
          </Row>
      <Row>
      <Col span={8}></Col>
      <Col span={8}>
      <CartList></CartList>
      </Col>
        <Col span={8}></Col>
      </Row>
    </div>
    )
 }
 }


export default Cart;