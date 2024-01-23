import React from "react";
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Navbar, Container } from "react-bootstrap";

import Logo from "../../components/Logo";

const BlankLayout = ({ children }) => {
	return (
		<div className="w-100 h-100 layout--blank">
			<Navbar fixed="top" className="header">
				<Container fluid className="px-4">
					<Navbar.Brand as={RouterLink} to="/">
						<Logo />
					</Navbar.Brand>
				</Container>
			</Navbar>
			<Container fluid className="px-0 content">
				{children}
			</Container>
		</div>
	);
}

BlankLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default BlankLayout;