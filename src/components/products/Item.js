import React from "react";
import PropTypes from "prop-types";

const Item = ( { item }) => {
  return (
      <div>
          <img src={item.image} className="img-thumbnail" alt={"img"} />
          <h5 className="card-title" title={item.name}>{item.name}</h5>
          <h6><i className="fa fa-usd" aria-hidden="true"></i> {item.price}</h6>
      </div>
  )
}

Item.propTypes = {
  item: PropTypes.any
};

export default Item;
