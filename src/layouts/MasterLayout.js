import React from "react";
import { connect } from "react-redux";

import DefaultLayout from "./DefaultLayout";
import BlankLayout from "./BlankLayout";
import { logout } from "../redux/actions/authActions";

function MasterLayout({ children, isAuthenticated }) {
  const Layout = isAuthenticated ? DefaultLayout : BlankLayout;
  return <Layout>{children}</Layout>;
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MasterLayout);
