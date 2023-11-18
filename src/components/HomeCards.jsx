import { Link } from "react-router-dom";
import "../styles/Home.css";

function HomeCards({ img, logo, text, link }) {
  return (
    <div className="card-aboutus">
      <Link to={link}>
        <img className="pic-card" src={img} alt="Photo du CEO de Pictarine" />
        <img className="logo-card my-4" src={logo} alt="logo d'entreprises" />
        <p>{text}</p>
      </Link>
    </div>
  );
}

export default HomeCards;
