import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Link} from 'react-router-dom';

class Header extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(this.props.cart.cartItems.length);
    }

    render () {
        return (
            <div className="cartheader">
                <b style={{float:'right',margin:'15px'}}>{this.props.cart.cartItems.length}</b>
                <Link to="/cart"><img className="cartImage" src="images/cart.jpg" /></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Header);