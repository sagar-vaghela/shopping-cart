import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Badge } from "../../ui-kit/common-ui-components";
import * as routes from "../../lib/constants";
import { DashboardFilter } from ".";

class Header extends Component {
  render() {
    const { cartData, handleApplyClick } = this.props;
    return (
      <header>
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">
            <Link to={"/"}> Acme.com</Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <DashboardFilter handleApplyClick={handleApplyClick} />
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarToggler"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={routes.CARTS_ROUTE}>
                  {" "}
                  <span className="nav-link active">
                    {" "}
                    <Badge count={cartData.cartCount} />{" "}
                  </span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  cartData: PropTypes.any,
  handleApplyClick: PropTypes.func.isRequired
};

export default Header;
