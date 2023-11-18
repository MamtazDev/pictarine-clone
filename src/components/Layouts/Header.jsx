import Plogo from "../../assets/Img/Plogo.png";
import "../../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  const location = useLocation();
  const isTechPage = location.pathname === "/tech";

  return (
    <header>
      <Navbar className={`${isTechPage ? 'bg-black text-white py-4' : 'bg-white py-4'}`} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to={'/'}>
              <img className="img-fluid Logo" src={Plogo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={location.pathname === "/tech" ? "bg-white" : ""} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Link to={'/'} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
              </Link>

              <Link to={'/product'} className={location.pathname === "/product" ? "nav-link active" : "nav-link"}>
                Notre Produit
              </Link>

              <Link to={'/pictaLife'} className={location.pathname === "/pictaLife" ? "nav-link active" : "nav-link"}>
                Picta life
              </Link>

              <Link to={'/team'} className={location.pathname === "/team" ? "nav-link active" : "nav-link"}>
                La Team
              </Link>

              <Link to={'/tech'} className={location.pathname === "/tech" ? "nav-link active " : "nav-link"}>
                La Tech
              </Link>

              <Link to={'/partnerships'} className={location.pathname === "/partnerships" ? "nav-link active" : "nav-link"}>
                Partnerships
              </Link>

              <Link to={'/rejoinsNous'} className={location.pathname === "/rejoinsNous" ? "nav-link active" : "nav-link"}>
                Rejoins-nous
              </Link>

              <Link to={'#'} className={location.pathname === "#" ? "nav-link active" : "nav-link"}>
                <img
                  className="french-flag"
                  src="https://pictarine.com/menu/fr.png"
                  alt="icone du drapeau de la France"
                />
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>




  );


}

export default Header;
