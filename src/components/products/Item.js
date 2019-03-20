import React from "react";
import PropTypes from "prop-types";

const Item = ( { item }) => {
  console.log(item.image);
  
  return (
      <div>
        <h5 className="card-title">{item.name}</h5>
        <img src="https://5.imimg.com/data5/EF/RQ/MY-3030942/lenovo-desktop-computer-500x500.jpg" className="productImgThumbnail" />
        <p className="card-text">{item.description}</p>
      </div>
  )
}

Item.propTypes = {
  item: PropTypes.any,
  handleAddToCart: PropTypes.func.isRequired
};

export default Item;
