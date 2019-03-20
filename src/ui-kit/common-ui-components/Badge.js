import React from "react";
import PropTypes from "prop-types";

const Badge = ({ count }) => (
  <span className="p1 fa-stack fa-2x has-badge" data-count={count}>
    <i className="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
  </span>
);

Badge.prototype = {
  count: PropTypes.number.isRequired
}

export default Badge;
