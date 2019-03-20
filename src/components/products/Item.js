import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "../../ui-kit";
import * as routes from "../../lib/constants";

const Item = ( { item, handleAddToCart }) => {
  return (
      <div>
        <Link to={`${routes.BASE_ITEM_ROUTE}${item.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.name}</h5>
              <small>Price: {item.price} <i className="fa fa-inr"></i></small>
          </div>
          <p className="mb-1">
              <img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" className="productImgThumbnail" />
              {item.description}
          </p>
         </Link>
        <Button type="button" className="btn btn-info pull-right" text="Add to cart" id={item.id} onClick={handleAddToCart} />
      </div>
  )
}

Item.propTypes = {
  item: PropTypes.any,
  handleAddToCart: PropTypes.func.isRequired
};

export default Item;
