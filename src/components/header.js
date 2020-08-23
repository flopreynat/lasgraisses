import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap"
import headerStyles from "./header.module.scss"
import logo from '../images/logos/logo.jpg'
import bannerImg from '../images/village/IMG_20200517_174905.jpg'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <Navbar bg="white" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logoMairie navIcon" /> {data.site.siteMetadata.title}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="real_index" className="nav-link">Bienvenue</Link>
              </Nav.Link>
              <NavDropdown title="Mon Village" id="basic-nav-dropdown" className="nav-link">
                <NavDropdown.Item>
                  <Link to="/mon-village/hitoire" className="nav-link">Histoire</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/#" className="nav-link">Conseil Municipal</Link>
                  </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                <Link to="/#" className="nav-link">Élections</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/blog" className="nav-link">Blog</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/calendar" className="nav-link">Actualités</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="divBannerImg"></div>
    </header>
  )
}

export default Header
