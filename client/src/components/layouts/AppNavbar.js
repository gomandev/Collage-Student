import React, { PureComponent } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'

class AppNavbar extends PureComponent {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <>
        <Navbar dark expand="sm" className="mb-5 bg-danger">
          <Container>
            <NavbarBrand href="/">Student</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={!this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/gomandev">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default AppNavbar
