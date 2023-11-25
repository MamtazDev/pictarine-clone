import "../styles/SliderRecrutment.css";
function SliderRecrutment({ number, title, time, text, img, dataDay }) {
  const titleParts = title.split("\n");
  const firstPart = titleParts[0];
  const secondPart = titleParts[1];
  return (

      <div className="container-card-recrutment" data-day={dataDay}>
        <div className="first-block-card-recrutment">
          {number && <p>{number}</p>}
          {img && <img src={img} alt="Logo de fête" />}
        <h2 className="title-block-2" style={{ fontSize: '25px', lineHeight: '32px'}}>
            {firstPart} <br />
            {secondPart}
          </h2>
        </div>
        <p className="time-card mt-3">{time}</p>
        <p className="m-0">{text}</p>
      </div>

  );
}

export default SliderRecrutment;
