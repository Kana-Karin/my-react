import React from 'react';
import { MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import QueueAnim from 'rc-queue-anim';
import Typing from '../components/Typing';

//import image
import hero from '../assets/img/main.png'

function Home() {
    return (
      <div className="Home">
        <MDBRow>
         <MDBCol size='6' className='col-6-home'>
          <div className="home-header">
            <QueueAnim >
            <div key="2"><MDBTypography className='lead mb-0'>初めまして</MDBTypography></div>
              <Typing />
            </QueueAnim>
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
  