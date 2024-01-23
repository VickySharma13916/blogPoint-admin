import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import useWindowSize from "../../hooks/UseWindowSize";

const Page = forwardRef(
  (
    { children, title = "", containerFluid, padding, className, ...rest },
    ref
  ) => {
    const isMobile = useWindowSize();
    return (
      <main
        ref={ref}
        {...rest}
        style={{
          padding: `${isMobile ? "0 16px" : "auto"}`,
          marginTop: `${isMobile ? "4rem" : "1.5rem"}`,
          marginLeft: `${isMobile ? "0" : "256px"}`,
          width: `${isMobile ? "calc(100% - 0px)" : "calc(100% - 256px)"}`,
        }}
      >
        <Helmet>
          <title>
            {title}
            {process.env.REACT_APP_SITE_NAME
              ? ` | ${process.env.REACT_APP_SITE_NAME}`
              : ""}
          </title>
        </Helmet>
        <Container
          fluid={containerFluid}
          className={`${padding ? (isMobile ? "p-0" : "ps-0 pe-4") : "p-0"}`}
        >
          {children}
        </Container>
      </main>
    );
  }
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  containerFluid: PropTypes.bool,
  padding: PropTypes.bool,
  className: PropTypes.string,
};

Page.defaultProps = {
  containerFluid: false,
  padding: true,
  className: "",
};

export default Page;
