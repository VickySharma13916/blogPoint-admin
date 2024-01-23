import React from "react";
import PropTypes from "prop-types";
// import { Image } from "react-bootstrap";
// import LogoImg from "../../assets/images/logo.png";

const Logo = ({ width, maxWidth }) => {
  return <div className="logo-brand">BlogPoint</div>;
  // <Image src={LogoImg} style={{ width: width, maxWidth: maxWidth }} fluid />
};

Logo.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
};

Logo.defaultProps = {
  title: "",
  width: "100px",
  maxWidth: "100%",
};

export default Logo;
