import React from 'react'

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }from 'mdb-react-ui-kit';
const Connect = () => {
  return (
<>
<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-40'>
  <MDBCol col='12'>

    <MDBCard className='text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
        <MDBBtn outline className='mx-2 px-5' color='dark' size='lg'>
          Integratio with page 
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
</MDBRow>
</MDBContainer>

</>
  )
}

export default Connect