
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import LOGO from '../assets/img/kalinka-logo-icon-w.png';
import { Navbar, Nav } from 'react-bootstrap';


class Navi extends React.Component {
    state = {
        isOpen: false
      };
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
    render () {
        return (
      <div className="Navi">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="#home">
                      <img
                          src={LOGO}
                          width="30"
                          height="30"
                          alt="Kalinka logo"
                      />
                      Kalinka
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="mr-auto">
                          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                          <Nav.Link><Link to='/About'>About</Link></Nav.Link>
                          <Nav.Link><Link to='/Works'>Works</Link></Nav.Link>
                          <Nav.Link><Link to='/Contact'>Contact</Link></Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar >
      </div>
    )
   }
  }
  
  export default Navi;
  