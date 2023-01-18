import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className='nav-link' to='/' > <i class="fa-solid fa-house"></i> Home</Link>
            <Link className='nav-link' to='/Contact' ><i class="fa-solid fa-address-book"></i> Contacto</Link>                     
          </Nav>
          <Navbar.Brand href="#home">Happy Cake <i class="fa-solid fa-cake-candles"></i></Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigation;