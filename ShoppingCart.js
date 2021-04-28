import React from 'react';
import Products from './Products';
import {connect} from 'react-redux';

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
    }

    render () {
        return (
            <center>
                <Products />
            </center>
        )
    }
}

export default ShoppingCart;