// In this updated code, I replaced the <Link> components with <NavLink> components and added the className="nav-link" to apply the CSS styles.
//  Make sure you have the necessary CSS classes defined in your CSS file to style the links accordingly.
// ---------------------------------------------------------------------------------------------------------
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavigationComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <Navbar
        onClick={navToggle}
        className="my-0"
        color="secondary"
        dark
        expand="sm"
      >
        <NavbarBrand href="/">KFC - Restaurant</NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/menu" className="nav-link">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" className="nav-link">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" className="nav-link">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationComponent;
