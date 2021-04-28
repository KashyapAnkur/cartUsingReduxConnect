import React from 'react';
import {connect} from 'react-redux';
import {addToCart} from './actions/CartAction'

class Products extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log(this.props.cart.cartItems);
    }

    render () {
        return (
            <>
                <h1>Products</h1>
                {this.props.cart.items.map( (val,index) => {
                    return (
                        <div className="productCard">
                            <div className="productImage">
                                <img src={`/images/${val.img}.jpg`} />
                            </div>
                            <div className="productName">
                                <strong>{val.productName}</strong><br />
                                <span>Color: {val.color}</span><br />
                                <button onClick={() => this.props.add(index)}>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {add: (index) => dispatch(addToCart(index))};
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);