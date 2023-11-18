import '../styles/PartnerShip.css'
function PartnerShips({ logo, title, text }) {
  return (
    <div className="g-container-partnerships-card h-100">
      <div className="container-partnerships-card">
        <img className="img-fluid" src={logo} alt="" />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default PartnerShips;
