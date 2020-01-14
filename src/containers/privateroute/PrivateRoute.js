import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { WeightContext } from "../../contextApi/WeightContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(WeightContext);

  return (
    <Route
      render={routeProps =>
        !currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
