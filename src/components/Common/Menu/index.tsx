import { Container, Navbar, Nav, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginIcon from "../../../utils/icons/login-icon.png"
import taskIcon from "../../../../src/utils/icons/task-icon.png";
import usersIcon from "../../../../src/utils/icons/users-icon.png";
import categoriesIcon from "../../../../src/utils/icons/categories-icon.png";
import { NavLink } from 'react-router-dom';

const Menu = () => {

    return (
      // Navbar con boostrap
      <>
      <Navbar bg="dark" variant="dark" className='navbar-vertical d-flex flex-column'>
        <Navbar.Brand>To do App</Navbar.Brand>
        <Container className='d-flex flex-column'> 
          <Nav className="d-flex flex-column"> 
              <NavLink to="/login" className="nav-item">
                  <Image src={loginIcon} className="nav-icon me-2"/>
                  Login
              </NavLink>
              <NavLink to="/tasks" className="nav-item">
                  <Image src={taskIcon} className="nav-icon me-2"/>
                  Tasks
              </NavLink>
              <NavLink to="/users" className="nav-item">
                <Image src={usersIcon} className="nav-icon me-2"/>
                Users
              </NavLink>
              <NavLink to="/categories" className="nav-item">
                <Image src={categoriesIcon} className="nav-icon me-2"/>
                Categories
              </NavLink>
          </Nav>
      </Container>
    </Navbar>
    
    </>
    
      );

}

export { Menu }
