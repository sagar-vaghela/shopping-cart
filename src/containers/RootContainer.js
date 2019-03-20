import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { 
  getItems, 
  addToCart,
  removeToCart 
} from "../actions";

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
    const { items, cartData } = this.props;
    return (
      <div>
        <Header cartData={cartData} />
        <div className="container-fluid main-container">
          <div className="row col-12">
            <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
              <LeftSideBar handleApplyClick={this.getFilter} />
            </div>
            <main className="col-12 col-md-9 col-xl-10 py-md-3 pl-md-5 bd-content">
              <DashboardRoutes items={items} handleAddToCart={this.handleAddToCart}/>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getItems();
  }

  handleAddToCart = (e) => {
    let id = e.target.id; 

    const { cartData, items } = this.props;
    
    let itemData = items.filter(i => i.id !== parseInt(id));

    let count = cartData.cartCount + 1;

    let paylod = { itemData , count }

    this.props.addToCart(paylod);
    this.props.getItems(itemData);
  }

  getFilter = (filterData) => {
    //list of array data as object & calling API
  }
}

RootContainer.propTypes = {
  getItems: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeToCart: PropTypes.func.isRequired,
  cartData: PropTypes.any,
  items: PropTypes.any
};

const mapStateToProps = state => ({
  items: state.itemData.items,
  cartData: state.cartData
});

const mapDispatchToProps = {
  getItems,
  addToCart,
  removeToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
