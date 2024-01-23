import React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Avatar from "react-avatar";
import { Container, Navbar, Nav } from "react-bootstrap";
import DropdownMenu from "../DropdownMenu";
import Logo from "../Logo";
import useWindowSize from "../../hooks/UseWindowSize";
import { BACKEND_URL } from "../../services/constants";

const Header = ({ handleLogout, user }) => {
  const history = useHistory();
  const isMobile = useWindowSize();
  return (
    <Navbar sticky="top" className="header">
      <Container fluid className={`${isMobile ? "px-3" : "px-4"}`}>
        <Navbar.Brand as={RouterLink} to="/">
          <Logo />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <DropdownMenu
            menu={[
              {
                label: "Profile",
                onClick: () => history.push("/account"),
              },
              {
                label: "Logout",
                onClick: () => handleLogout(),
              },
            ]}
            style={{
              button: {
                padding: 0,
              },
              menu: {
                minWidth: 150,
              },
            }}
            icon={
              <Avatar
                src={
                  user && user?.adminImage
                    ? BACKEND_URL + user.adminImage
                    : null
                }
                name={`${user?.firstName} ${user?.lastName}`}
                size="45"
                className="ff-primary"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              />
            }
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

Header.defaultProps = {};

export default Header;
