import Plogo from "../../assets/Img/Plogo.png";
import { Link, useLocation } from "react-router-dom";
import insta from "../../assets/Img/instaLogo.svg";
import "../../styles/Home.css";
import "../../styles/Footer.css";
import iconLikedin from "../../assets/Img/icon-linkedin.png";
import wtj from "../../assets/Img/wtj.png"

function Footer({ isProductPage, isTechPage }) {
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
              <Link to={"/Home"}>Home</Link>
              <Link to={"/Product"}>Notre Produit</Link>
              <Link to={"/PictaLife"}>Picta life</Link>
              <Link to={"/Team"}>La Team</Link>
              <Link to={"/Tech"}>La Tech</Link>
              <Link to={"/Partnerships"}>Partnerships</Link>
              <Link to={"/RejoinsNous"}>Rejoins-nous</Link>
            </div>

            <div className="container-trad-footer">
              <img
                src="https://pictarine.com/menu/en.png"
                className="american-flag"
                alt="icone du drapeau américain"
              />
              <p>Passer en version anglais</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
