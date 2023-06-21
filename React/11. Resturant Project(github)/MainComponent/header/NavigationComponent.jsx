import React from "react";
import {Navbar, NavbarBrand} from 'reactstrap';

const NavigationComponent = () => {
	return (
		<div>
			<Navbar className="my-0" color="secondary" dark>
				<NavbarBrand href="/">Reactstrap</NavbarBrand>
			</Navbar>
		</div>
	);
};

export default NavigationComponent;
