import React,{ Component } from "react"
import {Navbar} from 'react-bootstrap/'
import {Nav} from 'react-bootstrap/'
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'
import {Link} from 'react-scroll'
class Header extends Component{
    render(){
        return(
          
  <Navbar className='' r bg="light"  expand="lg">
  <div className="container navbar">
  <Navbar.Brand href="#home">
  <Nav.Link class="navbar-brand  " href="#"><img  src={logo} alt="logo"/></Nav.Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto navlinks">
      <Nav.Link className="navlink btn-nav" href="#home"><Link  to="contacts" spy={true} smooth={true}>تواصل معنا</Link></Nav.Link>
      <Nav.Link className="navlink border-dot-nav m-nav-left navlink1" href="#link"><Link  to="companies" spy={true} smooth={true}>شركاؤنا</Link></Nav.Link>
      <Nav.Link className="navlink border-dot-nav navlink1" href="#link"><Link  to="outputs" spy={true} smooth={true}>المخرجات</Link></Nav.Link>
      <Nav.Link className="navlink border-dot-nav navlink1" href="#link"><Link  to="tools" spy={true} smooth={true}>أدوات البرنامج</Link></Nav.Link>
      <Nav.Link className="navlink border-dot-nav navlink1" href="#link"> <Link  to="benefits" spy={true} smooth={true}>القيمة المضافة</Link></Nav.Link>
      <Nav.Link  className="navlink border-dot-nav navlink1" href="#link"><Link  to="about" spy={true} smooth={true}>عن البرنامج</Link> </Nav.Link>
    </Nav>
  </Navbar.Collapse>
 
  </div>
</Navbar>
        
        )
    }
}

export default Header