import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter backgroundColor='dark' textColor="white" className='text-center'>
      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Kalinka
        </a>
      </div>
    </MDBFooter>
  );
}