import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { logout } from "../../redux/actions/authActions";

const DefaultLayout = ({ children, user, handleLogout }) => {
  return (
    <div className="w-100 layout--default position-relative ">
      <Header title="Dashboard" user={user} handleLogout={handleLogout} />
      <Sidebar />
      {children}
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
