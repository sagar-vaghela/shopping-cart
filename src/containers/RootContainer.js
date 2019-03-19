import React, { Component } from "react";
// import PropTypes from "prop-types";
import {
    DashboardRoutes,
    LeftSideBar
} from "../routes";

import { Header, Footer } from "../components";

class RootContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  getFilter = (filterData) => {
    //list of array data as object & calling API
    console.log(filterData);
  }

  render() {
    return (
      <div>
        <Header />
        <div class="container-fluid" className="main-container">
          <div class="row col-12">
              <div class="col-3 position-fixed" id="sticky-sidebar">
                <LeftSideBar handleApplyClick={this.getFilter} />
              </div>
              <div class="col-9" id="main">
              </div>
          </div>
      </div>
            {/* <section className="main-section">
                <div className="container">
                    <div className="row">
                        <div className="left_menu_second no-padding">
                          <LeftSideBar handleApplyClick={this.getFilter} />
                        </div>
                        <div>
                            <DashboardRoutes />
                        </div>
                    </div>
                </div>
            </section> */}
        <Footer />
      </div>
    );
  }
}

// RootContainer.propTypes = {
//   history: PropTypes.any
// };

export default RootContainer;
