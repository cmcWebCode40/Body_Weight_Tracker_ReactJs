import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { WeightContext } from "../../contextApi/WeightContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [currentUser] = useContext(WeightContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? <Component {...routeProps} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;
