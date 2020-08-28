import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  authed,
  publicOnly,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true && publicOnly === true ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
