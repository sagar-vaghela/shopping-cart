import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getItems } from "../actions";

import {
  DashboardRoutes,
  LeftSideBar
} from "../routes";

import { Header, Footer } from "../components";

class RootContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: null
    };
  }

  render() {
    const  { items } = this.props;
    return (
      <div>
        <Header />
        <div className="container-fluid main-container">
          <div className="row col-12">
            <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
              <LeftSideBar handleApplyClick={this.getFilter} />
            </div>
              <DashboardRoutes items={items} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getItems();
  }

  
  getFilter = (filterData) => {
    //list of array data as object & calling API
    console.log(filterData);
  }

}

RootContainer.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.any
};

const mapStateToProps = state => ({
  items: state.itemData.items
});

const mapDispatchToProps = {
  getItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
