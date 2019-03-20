import React from "react";
import PropTypes from "prop-types";

const Item = ( { item, handleAddToCart }) => {
  return (
      <div>
          <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.name}</h5>
              <small>Price: {item.price} <i className="fa fa-inr"></i></small>
          </div>
          <p className="mb-1">
              <img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" className="productImgThumbnail" />
              {item.description}
          </p>
      </div>
  )
}

Item.propTypes = {
  item: PropTypes.any,
  handleAddToCart: PropTypes.func.isRequired
};

export default Item;
