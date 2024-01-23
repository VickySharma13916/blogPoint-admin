import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoute = ({
  id,
  path,
  exact,
  strict,
  isPublic,
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  const authorized = isPublic || isAuthenticated;
  return (
    <Route
      {...rest}
      render={props =>
        authorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AuthRoute);
