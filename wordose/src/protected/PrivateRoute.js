import React from "react";
import { Route, Redirect } from "react-router-dom";

const PRoute = ({ component: Component, ...stuff }) => (
  <Route
    {...stuff}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PRoute;
