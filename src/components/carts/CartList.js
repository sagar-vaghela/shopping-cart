import React from "react";
import PropTypes from "prop-types";
import Cart from "./Cart";

const CartList = ( { carts, handleRemoveToCart} ) => {
    return (
        <div className="accordion" id="accordionExample">
            {
                carts.map(cart => {
                    return <Cart key={cart.id} cart={cart} handleRemoveToCart={handleRemoveToCart} />
                })
            }
            {carts.length === 0 && <p>No Data found to display</p>}        
        </div>
    )
}

CartList.propTypes = {
    carts: PropTypes.any,
    handleRemoveToCart: PropTypes.func.isRequired
}

export default CartList;