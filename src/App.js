import React, { Component } from 'react';
import './App.css';
import Cart from './components/cart';
import Home from './components/home';
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl';

class App extends Component {
  
    constructor(props) {
        super(props);
        this.onNavigate = this.onNavigate.bind(this);
        this.state = {
            navLocation: ""
        };
    }

    getContent = function () {
        if (this.state.navLocation === "new") {
            return <Cart />;
        }
        return <Home />
    };

    onNavigate = function (contentArea) {
        this.setState({navLocation: contentArea});
    };

    render() {
        return (
        
        <div>
            <Layout fixedHeader>
                <Header style={{ background: '#216869' }} title={<span><strong>List Keeper</strong></span>}>
                    <Navigation>
                        <a style={{ cursor: 'pointer' }} onClick={() => this.onNavigate('home')}>Home</a>
                        <a style={{ cursor: 'pointer' }} onClick={() => this.onNavigate('new')}>New</a>
                        <a href="">Lists</a>
                        <a href="">Stores</a>
                        <a href="">Categories</a>
                    </Navigation>
                </Header>
                <Drawer title="Menu">
                    <Navigation>
                        <a style={{ cursor: 'pointer' }} onClick={() => this.onNavigate('home')}>Home</a>
                        <a style={{ cursor: 'pointer' }} onClick={() => this.onNavigate('new')}>New</a>
                        <a href="">Lists</a>
                        <a href="">Stores</a>
                        <a href="">Categories</a>
                    </Navigation>
                </Drawer>
                <Content>{this.getContent()}}</Content>
            </Layout>
        </div>

        );
    }
}

export default App;
