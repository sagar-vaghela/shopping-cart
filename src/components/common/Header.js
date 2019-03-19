import React, { Component } from "react";
import PropTypes from "prop-types";
import { Badge } from "../../ui-kit/common-ui-components";

class Header extends Component {
  render() {
    const { cartData } = this.props;
    return (
      <header>
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">Shopping Cart</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link active"> <Badge count={cartData.cartCount} /> <i className="fa fa-shopping-cart"></i> My Cart </span>
              </li>
            </ul>
            {
            /* 
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user"></i> John Doe
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button"><i className="fa fa-user"></i> My Profile</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" type="button">Log Out</button>
              </div>
            </div>
            */
            }
          </div> 
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  cartData: PropTypes.any
};

export default Header;
