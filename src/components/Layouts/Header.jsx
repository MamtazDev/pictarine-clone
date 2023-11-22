import Plogo from "../../assets/Img/Plogo.png";
import "../../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from "react";
import frImg from '../../assets/Img/fr.png';
import enImg from '../../assets/Img/en.png';
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isTechPage = location.pathname === "/tech";
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    i18next.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

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
                {t('title1')}
              </Link>

              <Link to={'/product'} className={location.pathname === "/product" ? "nav-link active" : "nav-link"}>
                {t('title2')}
              </Link>

              <Link to={'/pictaLife'} className={location.pathname === "/pictaLife" ? "nav-link active" : "nav-link"}>
                {t('title3')}
              </Link>

              <Link to={'/team'} className={location.pathname === "/team" ? "nav-link active" : "nav-link"}>
                {t('title4')}
              </Link>

              <Link to={'/tech'} className={location.pathname === "/tech" ? "nav-link active " : "nav-link"}>
                {t('title5')}
              </Link>

              <Link to={'/partnerships'} className={location.pathname === "/partnerships" ? "nav-link active" : "nav-link"}>
                {t('title6')}
              </Link>

              <Link to={'/rejoinsNous'} className={location.pathname === "/rejoinsNous" ? "nav-link active" : "nav-link"}>
                {t('title7')}
              </Link>

              <button onClick={handleLanguageChange} className={isTechPage ? "bg-black border-0" : "border-0 bg-white"}>
                {currentLanguage === 'en' ? (<img width={"32px"} src={enImg} />) : (<img width={"32px"} src={frImg} />)}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );

}

export default Header;
