import React from 'react';
import NavLink from '../NavLink'
import ImageContainer from './ImageContainer'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import '../../main.css';

class WebNavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/" onlyActiveOnIndex>
                <ImageContainer className='logo' path={require('../../assets/logo.png')} />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <NavLink to="/tiendas">Tiendas</NavLink>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <NavLink to="/restaurantes">Restaurantes</NavLink>
              </NavItem>
              <NavItem eventKey={4} href="#">
                <NavLink to="/cines">Cine</NavLink>
              </NavItem>
              <NavItem eventKey={5} href="#">
                <NavLink to="/ofertas">Ofertas</NavLink>
              </NavItem>
              <NavItem eventKey={6} href="#">
                <NavLink to="/hospital">Hospital</NavLink>
              </NavItem>
              <NavItem eventKey={7} href="#">
                <NavLink to="/hotel">Hotel</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default WebNavBar
