import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getItems, addToCart, removeToCart } from "../actions";

import { DashboardRoutes } from "../routes";

import { Header, Footer } from "../components";

import { products } from "../mock";

class RootContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      carts: props.cartData.carts,
      items: props.items
    };
  }

  render() {
    const { items, cartData } = this.props;
    return (
      <div>
        <Header cartData={cartData} handleApplyClick={this.getFilter} />
        <div className="container-fluid main-container">
          <div className="row col-12">
            <main className="col-12 col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">
              <DashboardRoutes
                items={items}
                carts={cartData.carts}
                handleAddToCart={this.handleAddToCart}
                handleRemoveToCart={this.handleRemoveToCart}
              />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  componentDidMount = () => {
    this.props.getItems();
  };

  handleAddToCart = e => {
    let id = e.target.id;
    const { items, cartData } = this.props;
    let itemData = items.filter(i => i.id !== parseInt(id));
    this.props.getItems(itemData);

    const { carts } = this.state;
    let cartItem = items.filter(i => i.id === parseInt(id));
    const indexOf = carts.findIndex(c => {
      return c.id === parseInt(id);
    });
    if (indexOf === -1) {
      carts.push(cartItem[0]);
    } else {
      carts.splice(indexOf, 1);
      carts.push(cartItem[0]);
    }
    let count = cartData.cartCount + 1;
    let paylod = { carts, count };
    this.props.addToCart(paylod);
  };

  handleRemoveToCart = e => {
    let id = e.target.id;
    const { items, cartData } = this.props;
    const { carts } = this.state;
    const indexOf = carts.findIndex(c => {
      return c.id === parseInt(id);
    });

    if (indexOf !== -1) {
      carts.splice(indexOf, 1);
      let count = cartData.cartCount - 1;
      let paylod = { carts, count };
      this.props.removeToCart(paylod);
    }

    let productItem = products.filter(i => i.id === parseInt(id));
    const indexOfItem = items.findIndex(c => {
      return c.id === parseInt(id);
    });

    if (indexOfItem === -1) {
      items.unshift(productItem[0]);
    } else {
      items.splice(indexOfItem, 1);
      items.unshift(productItem[0]);
    }
    this.props.getItems(items);
  };

  getFilter = filterData => {
    //list of array data as object & calling API.
    let itemData = products.filter(i => i.type === filterData);
    this.props.getItems(itemData);
  };
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
