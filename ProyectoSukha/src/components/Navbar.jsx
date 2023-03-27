import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Img from '../Img/LogoSukha.png';
import "../Style/Navbar.css";
import { FaRegHeart } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { BsCart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';




function NavScroll() {

  return (
    <Navbar bg="light" expand="lg" >
      <Container fluid className="justify-content-around" style={{ backgroundColor: '#D49D85' }}>
      <Navbar.Toggle className="ml-auto navbar-toggler-icon-xl" />

        <Row className='bold-color'>
        
             <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
                <Navbar.Collapse id="navbarScroll">
              <Col className="d-flex flex-grow-1">
         
                <Nav className="ml-auto" style={{ marginTop: '35px'}} >
                  <Nav.Link className="mt-auto"  href="/productList">Velas</Nav.Link>
                  <Nav.Link className="mt-auto" href="/productList/sahumerios">Sahumerios</Nav.Link>
                  <Nav.Link className="mt-auto" href="/productList/inciensos">Inciensos</Nav.Link>
                </Nav>
              </Col>
              </Navbar.Collapse>
              <Col >
                <Nav className="mr-auto">
                <div>
                  <Navbar.Brand id= 'logo' href='/'><img src={Img} /></Navbar.Brand>
                  </div>
                </Nav>
              </Col>
            
              <div className="d-flex flex-column justify-content-end align-items-end" >
              
                
                
                  <Nav className="mb-2" id='menu' >
              <div className="d-flex" style={{ marginBottom: '-10px' }}>
              <Navbar.Collapse id="navbarScroll">
                
                    <Button variant="primary " size="lg" style={{ backgroundColor: 'transparent', border: 'none' }}>
                      < BsSearch style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }} />
                    </Button>
                    <Button variant="primary " size="lg" href="/addProduct" style={{ backgroundColor: 'transparent', border: 'none' }}>
                      < BsPerson style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }} />
                    </Button>
                  
                    </Navbar.Collapse>
                  
                    <Button variant="primary " size="lg" style={{ backgroundColor: 'transparent', border: 'none' }}>
                      < FaRegHeart style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }} />
                    </Button>
                    <Button variant="primary "  size="lg" style={{ backgroundColor: 'transparent', border: 'none' }}>
                      < BsCart style={{ backgroundColor: 'none', color: '#511A29', size: '2em' }} />
                    </Button>
                  
                  </div>
                  </Nav>
                
                <Navbar.Collapse id="navbarScroll">
                <Col>
                  <Nav>
                    <Nav.Link href="/productList/aceites">Aceites</Nav.Link>
                    <Nav.Link href="/productList/minerales">Minerales</Nav.Link>
                    <Nav.Link href="/productList/accesorios">Accesorios</Nav.Link>
                  </Nav>
                </Col>
                </Navbar.Collapse>
              </div>






              {/*             <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
      


            {/*  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

</Nav>
          
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavScroll;