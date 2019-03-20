import React from "react";
import PropTypes from "prop-types";

const Item = ( { item }) => {
  return (
      <div>
        <h5 className="card-title">{item.name}</h5>
          <img src={item.image} alt={item.id} className="productImgThumbnail" />
        <p className="card-text">{item.description}</p>
      </div>
  )
}

Item.propTypes = {
  item: PropTypes.any
};

export default Item;
