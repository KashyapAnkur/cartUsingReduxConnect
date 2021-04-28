import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionRemoveItem} from './actions/CartAction';

class Cart extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.cart.cartItems);
    }

    render () {
        return (
            <>
                <Link to="/" >Go to Products</Link><br />
                {this.props.cart.cartItems.map( (val,index) => {
                    return (
                        <div className="productCard">
                            <div className="productImage">
                                <img src={`/images/${val.img}.jpg`} />
                            </div>
                            <div className="productName">
                                <strong>{val.productName}</strong><br />
                                <span>Color: {val.color}</span><br />
                                <button onClick={() => this.props.remove(index)}>Delete from cart</button>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (indexToDelete) => dispatch(actionRemoveItem(indexToDelete))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);