import Plogo from "../../assets/Img/Plogo.png";
import { Link, useLocation } from "react-router-dom";
import insta from "../../assets/Img/instaLogo.svg";
import "../../styles/Home.css";
import "../../styles/Footer.css";
import iconLikedin from "../../assets/Img/icon-linkedin.png";
import wtj from "../../assets/Img/wtj.png"
import frImg from '../../assets/Img/fr.png';
import enImg from '../../assets/Img/en.png';
import { useState } from "react";
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

function Footer({ isProductPage, isTechPage }) {

  const {t} = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState('fr');

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    i18next.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };


  const footerClasses = isProductPage
    ? "g-container-footer product-footer-bg-black"
    : "g-container-footer";

  const navbarClasses = isTechPage
    ? " container-links container-links-bg-black"
    : " container-links";

  const logoClasses = isTechPage
    ? "logo-social logo-social-black"
    : "logo-social";
  return (
    <footer className={`${footerClasses} ${navbarClasses} section-padding`}>
      <div className="container">
        <div className={footerClasses + navbarClasses}>
          <div className="left-block-footer mb-5 mb-lg-0">
            <img src={Plogo} className="Logo" alt="logo de Pictarine" />
            <div className="g-container-infos">
              <p>Bat B, 3ème étage</p>
              <p>46 rue Marco Polo</p>
              <p>31670 Labège</p>
            </div>
            <div className={logoClasses}>
              <Link to={"https://www.instagram.com/pictarine/"}>
                <img src={insta} />
              </Link>
              <Link to={"https://www.iconLikedin.com/company/pictarine/"}>
                <img src={iconLikedin} alt="iconLikedin logo" />
              </Link>
              <Link
                to={"https://www.welcometothejungle.com/fr/companies/pictarine"}
              >
                <img className="wttj" src={wtj} alt="instagram-logo" />
              </Link>
            </div>
          </div>

          <div className="right-block-footer">

            <div className="links-footer">
              <Link to={"/"}>
                {t('title1')}
              </Link>
              <Link to={"/product"}>
                {t('title2')}
              </Link>
              <Link to={"/pictalife"}>
                {t('title3')}
              </Link>
              <Link to={"/team"}>
                {t('title4')}
              </Link>
              <Link to={"/tech"}>
                {t('title5')}
              </Link>
              <Link to={"/partnerships"}>
                {t('title6')}
              </Link>
              <Link to={"/rejoinsnous"}>
                {t('title7')}
              </Link>
            </div>

            <div className="container-trad-footer">
              <button onClick={handleLanguageChange} className={isTechPage ? "bg-black border-0" : "border-0 bg-white"}>
                {currentLanguage === 'en' ? (<img width={"32px"} src={enImg} />) : (<img width={"32px"} src={frImg} />)}
              </button>
              <p>Passer en version anglais</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
