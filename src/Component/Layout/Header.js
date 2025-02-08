import React from 'react'
import{Container,Nav,Navbar} from 'react-bootstrap'
// import '../../Styles/Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <Navbar bg='dark' data-bs-theme="dark">
        <Container>
         
          
          <Nav className="ms-auto">
            <Nav.Link as={Link}>Home</Nav.Link>
            <Nav.Link as={Link}>Menu</Nav.Link>
            <Nav.Link as={Link}>About Us</Nav.Link>
            <Nav.Link as={Link}><div class='cart'>cart
            <i class="bi bi-basket3 fs-5"></i>
            </div></Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
     
   
      
    
    </>
  )
}

export default Header
