import "../styles/ProblemSolvers.css";

function ProblemSolvers({ logo, title, text }) {
  return (
    <div className="container-problemsolvers">
      <div className="header-container">
        <img src={logo} alt="" />
        <span>{title}</span>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default ProblemSolvers;
