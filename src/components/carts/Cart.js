import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../ui-kit";

const Cart = ( {cart, handleRemoveToCart} ) => {
    return (
        <div className="card">
            <div className="card-header" id={"heading" + cart.id}>
                <h5 className={"mb-" + (cart.id - 1)}>
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse" + cart.id} aria-expanded="true" aria-controls={"collapse" + cart.id}>
                        {cart.name}
                    </button>
                </h5>
            </div>
            <div id={"collapse" + cart.id} className="collapse" aria-labelledby={"heading" + cart.id} data-parent="#accordionExample">
                <div className="card-body row">
                    <div className="product-preview-pic col-6">
                        <img src={cart.image} alt={cart.id} />
                    </div>
                    <div className="col-6">
                        <p className="product-description">{cart.description}</p>
                        <h4 className="price">current price: <span> <i className="fa fa-usd"></i> {cart.price} </span></h4>
                        <div className="action">
                            <Button type="button" className="btn btn-info" id={cart.id} onClick={handleRemoveToCart} text={<i className='fa fa-trash'></i>} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Cart.propTypes = {
    cart: PropTypes.any
}

export default Cart;