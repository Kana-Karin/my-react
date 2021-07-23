import React from 'react';
import Button from 'react-bootstrap/Button';
import { MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';

//import image
import hero from '../assets/img/progress-bro.svg'

function Home() {
    return (
      <div className="Home">
        <MDBRow>
         <MDBCol size='6' className='col-6-home'>
          <div className="home-header">
            <MDBTypography tag='h1'>Hello there✋</MDBTypography>
            <MDBTypography className='lead mb-0'>初めまして</MDBTypography>
            <MDBTypography tag='h3'>I'm Kanae fukushima.</MDBTypography>
          </div>
        </MDBCol>
        <MDBCol size='6' className='col-6-img'>
          <div><img src={hero} alt=""/></div>
        </MDBCol>
        </MDBRow>
      </div>
    );
  }
  
  export default Home;
  