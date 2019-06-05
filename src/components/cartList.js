import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Button, Skeleton } from 'antd';
import reqwest from 'reqwest';


let fakeDataUrl = 'aa';

class CartList extends React.Component {

    state = {
        initLoading: false,
    loading: false,
    data: [],
    list: [],
    }
    

    componentDidMount() {
      const { id } = this.props.match.params
      fakeDataUrl = `http://localhost:5000/admin/cart/${id}`;
        this.getData(res => {
            console.log(res);
          this.setState({
            initLoading: false,
            data: res,
            list: res,
          });
        });
      }

      getData = callback => {
        reqwest({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: res => {
            callback(res);
          },
        });
      };

    render() {
        const { initLoading, loading, list } = this.state;


        return(
            <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a>Agregar a favoritos</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.Product.name}</a>}
                description={'Precio: '+item.Product.price+', cantidad: '+item.quantity}
              />
              
            </Skeleton>
          </List.Item>
        )}
      />
        )
    }

}


export default CartList;