import React from 'react';
import '../../src/index.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import "../Style/Footer.css"
import { AiFillInstagram, AiOutlineWhatsApp, AiOutlineTwitter, AiFillFacebook, AiOutlineBorder } from 'react-icons/ai';



export default function Footer() {
  return (
    <MDBFooter id="Footer" className='text-center' color='white' >
      <div id="BKG">
      <MDBContainer className='p-4'>
        <section>
          <MDBRow id="FooterContainer">
            <MDBCol lg='3' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Envíos</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <div className='text-white'>
                    Envío Express (24/48h) 5.95 €
                  </div>
                </li>
                <li>
                  <div className='text-white'>
                  Envío Estándar (5/6 días laborables) 3.50 €
                  </div>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Servicios</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <div className='text-white'>
                    Contacto
                  </div>
                </li>
                <li>
                  <div className='text-white'>
                  Envíos y devoluciones
                  </div>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Información</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <div className='text-white'>
                    FAQ
                  </div>
                </li></ul>
            <section className='mb-4'>
          <MDBIcon color="light"  className='m-2'  href='#!' role='button'>
            <AiFillInstagram size={30}/>
          </MDBIcon>

          <MDBIcon color="light" className='m-2' href='#!' role='button'>
            <AiOutlineWhatsApp size={30}/>
          </MDBIcon>

          <MDBIcon color="light"  className='m-2' href='#!' role='button'>
            <AiOutlineTwitter size={30}/>
          </MDBIcon>

          <MDBIcon color="light" className='m-2' href='#!' role='button'>
            <AiFillFacebook size={30}/>
          </MDBIcon>
            </section>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
      </div>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(81, 26, 41, 1)' }}>
        © 2023  Sukha
        
      </div>
    </MDBFooter>
  );
}