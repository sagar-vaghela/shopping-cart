import React from "react";
import { Switch, Route } from "react-router-dom";
import * as routes from "./lib/constants";
import RootContainer from "./containers/RootContainer";

const App = () => {
  return (
    <Switch>
      <Route path={routes.ROOT_ROUTE} component={RootContainer} />
    </Switch>
  );
};

export default App;
