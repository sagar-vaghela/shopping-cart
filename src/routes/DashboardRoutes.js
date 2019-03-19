import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import * as routes from "../lib/constants";

import { ItemList, Item } from "../components";

class DashboardRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={routes.ROOT_ROUTE}
            component={ItemList}
          />
          <Route
            exact
            path={routes.ITEMS_ROUTE}
            component={ItemList}
          />
          <Route
            exact
            path={routes.ITEM_ROUTE}
            component={Item}
          />
        </Switch>
      </div>
    );
  }
}

DashboardRoutes.propTypes = {
};

export default DashboardRoutes;
