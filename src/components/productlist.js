import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, List, Avatar, Button, Skeleton } from 'antd';
import reqwest from 'reqwest';


const fakeDataUrl = 'http://localhost:5000/admin/products';

class ProductList extends React.Component {

    state = {
        initLoading: false,
    loading: false,
    data: [],
    list: [],
    loadingM: false,
    visible: false,
    currentProduct: " ",
    currentPrice: 0
    }

    componentDidMount() {
        this.getData(res => {
            console.log(res);
          this.setState({
            initLoading: false,
            data: res.docs,
            list: res.docs,
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

      showModal = ev => {
        this.setState({
          visible: true,
          currentProduct: ev.target.value,
          currentPrice: ev.target.price
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    

    render() {
      const { visible, loadingM } = this.state;
        const { initLoading, loading, list, currentProduct, currentPrice} = this.state;


        return(
          <div>
            <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<Button value={item.name} price={item.price} onClick={this.showModal} type="primary">Comprar</Button>
        ]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a >{item.name}</a>}
                description={'Precio: '+item.price+', stock: '+item.stock}
              />
              
            </Skeleton>
          </List.Item>
        )}
      />
      <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="Cancelar" onClick={this.handleCancel}>
              Cancelar
            </Button>,
            <Button key="Comprar" type="primary" loading={loading} onClick={this.handleOk}>
              Comprar
            </Button>,
          ]}
        >
          <h4>{currentProduct}</h4> 
          <h4>{currentPrice}</h4> 
        </Modal>
      </div>
      
        )
    }

}


export default ProductList;