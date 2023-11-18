import "../styles/Description.css";
function Description({ img, text, title, id }) {
  return (
    <div className="g-container-description">
      <img className="img-fluid" src={img} alt="divers photos de la société Pictarine" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Description;
