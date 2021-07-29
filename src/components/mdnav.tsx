import React, { useState } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav,
  } from 'mdb-react-ui-kit';
import LOGO from '../assets/img/kalinka-logo-icon-w.png';

export default function App() {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  return (
    <>
      <MDBNavbar expand='md' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler}>
          <Link to='/'>
            <MDBNavbarBrand href='https://kalinka-kana.herokuapp.com'><img
                          src={LOGO}
                          width="30"
                          height="30"
                          alt="Kalinka logo"
                      />
                      Kalinka</MDBNavbarBrand>
                      </Link>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink tabIndex={5} active aria-current='page'>
                <Link to='/'>Home</Link>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink><Link to='/About'>About</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink><Link to='/Works'>Works</Link></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink><Link to='/Contact'>Contact</Link></MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}