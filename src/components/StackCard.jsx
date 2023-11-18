import "../styles/StackCard.css";

function StackCard({ logo, title, tags, stacklogo }) {
  return (
    <div className="container-stackcard">
      <div className="first-block-stackcard">
        <img className="img-fluid" src={logo} alt="" />
        <p>{title}</p>
      </div>
      <span className="second-block-stackcard">
        {tags.map((tag, id) => {
          return (
            <span key={id} className="tag-tech">
              {tag}
            </span>
          );
        })}
      </span>
      <span className="third-block-stackcard">
        {stacklogo.map((logo, id) => {
          return <img className="img-fluid" key={id} src={logo} />;
        })}
      </span>
    </div>
  );
}

export default StackCard;
