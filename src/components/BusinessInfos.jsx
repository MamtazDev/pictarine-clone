import { useLocation } from "react-router";
import "../styles/Home.css";

function BusinessInfos({ number, title, text }) {
  const location = useLocation();
  const isTechPage = location.pathname === "/tech";
  const numberClasses = isTechPage
    ? "number-business number-business-tech"
    : "number-business";
  return (
    <div className="card-number-business">
      <p className={numberClasses}>{number}</p>
      <div className="sentences-on-number">
        <p className="title-business">{title}</p>
        <p className="sentence-business">{text}</p>
      </div>
    </div>
  );
}

export default BusinessInfos;
