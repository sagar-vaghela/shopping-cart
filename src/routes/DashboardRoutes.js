import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import * as routes from "../lib/constants";

import { ItemList, Cart, Product } from "../components";

class DashboardRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={routes.ROOT_ROUTE}
            component={this.handleItemList}
          />
          <Route
            exact
            path={routes.ITEMS_ROUTE}
            component={this.handleItemList}
          />
          <Route
            exact
            path={routes.ITEM_ROUTE}
            component={Product}
          />
          <Route
            exact
            path={routes.CART_ROUTE}
            component={Cart}
          />
        </Switch>
      </div>
    );
  }

  handleItemList = () => {
    const { items, handleAddToCart } = this.props;
    return <ItemList items={items} handleAddToCart={handleAddToCart} />
  }

  handleProduct = () => {
    const { handleAddToCart } = this.props;
    return <Product handleAddToCart={handleAddToCart} />
  }
}

DashboardRoutes.propTypes = {
  items: PropTypes.any,
  handleAddToCart: PropTypes.func.isRequired
};

export default DashboardRoutes;
