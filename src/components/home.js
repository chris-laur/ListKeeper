import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'react-mdl';

class Home extends Component {
  render() {
    return (

    <Card shadow={0} style={{width: '400px', margin: '40px'}}>
        <CardTitle style={{color: '#fff', height: '80px', background: '#49A078'}}>Welcome to List Keeper!</CardTitle>
        <CardText>
            <p>Free up your mind for more interesting bits of data. Let List Keeper store all of your lists.</p>
            <p>Shopping lists, To-Do lists...if you can put it on a list, List Keeper can keep it!</p>
        </CardText>
    </Card>

    );
  }
}

export default Home;