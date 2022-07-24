import { Container, Navbar, Nav, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginIcon from "../../../../src/utils/icons/login-icon.png";
import taskIcon from "../../../../src/utils/icons/task-icon.png";
import usersIcon from "../../../../src/utils/icons/users-icon.png";
import categoriesIcon from "../../../../src/utils/icons/categories-icon.png";

const Menu = () => {

    return (
      // Navbar con boostrap
      <>
      <Navbar bg="dark" variant="dark" className='navbar-vertical d-flex flex-column'>
        <Navbar.Brand>To do App</Navbar.Brand>
        <Container className='d-flex flex-column'> 
          <Nav className="d-flex flex-column"> 
              <Nav.Link>
                <Image src={loginIcon} className="nav-icon me-2"/>
                 Login
              </Nav.Link>   
              <Nav.Link>
                <Image src={taskIcon} className="nav-icon me-2"/>
                Tasks
              </Nav.Link>
              <Nav.Link>
                <Image src={usersIcon} className="nav-icon me-2"/>
                Users
              </Nav.Link>
              <Nav.Link>
                <Image src={categoriesIcon} className="nav-icon me-2"/>
                Categories
              </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    
    </>
    
      );

}

export { Menu }
