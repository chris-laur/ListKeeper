import React, { Component } from 'react';
import './App.css';
import Cart from './components/cart';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';

class App extends Component {
  render() {
    return (
      
<div>
    <Layout fixedHeader>
        <Header style={{ background: '#49A078' }} title={<span><strong>List Keeper</strong></span>}>
            <Navigation>
                <a href="">New</a>
                <a href="">Lists</a>
                <a href="">Stores</a>
                <a href="">Categories</a>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <a href="">New</a>
                <a href="">Lists</a>
                <a href="">Stores</a>
                <a href="">Categories</a>
            </Navigation>
        </Drawer>
        <Content><Cart /></Content>
    </Layout>
</div>

    );
  }
}

export default App;
