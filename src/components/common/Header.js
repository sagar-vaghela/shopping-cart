import React, { Component } from "react";
// import { NavItem } from "react-bootstrap";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
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
                <span className="nav-link active"> <i class="fa fa-shopping-cart"></i> My Cart </span>
              </li>
            </ul>
            <div className="btn-group">
              <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-user"></i> John Doe
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button"><i class="fa fa-user"></i> My Profile</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" type="button">Log Out</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      //   <header className="fixed">
      //   <nav className="navbar navbar-default">
      //     <div className="container">
      //       <div className="row">
      //         <div className="navbar-header">
      //           {"Name: Pravin"}            
      //         </div>
      //         <div
      //           className="collapse navbar-collapse"
      //           id="bs-example-navbar-collapse-1"
      //         >
      //           <ul className="nav navbar-nav pull-right">
      //             <NavItem
      //               className={`menu_home`}
      //             >
      //               {"Cart"}
      //             </NavItem>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </nav>
      // </header>
    );
  }
}

Header.propTypes = {
};

export default Header;
