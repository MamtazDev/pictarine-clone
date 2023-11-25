import "../styles/ProductCards.css";

function ProductCards({ img, title, text }) {
  return (
    <div className="product-card d-flex flex-column h-100 mb-4 mb-lg-0" style={{ maxWidth: '290px', width: '100%' }}>
      <div className="card_header">
        <h2 className="d-flex align-items-center">
          <span>
            <img src={img} alt="" />
          </span>
          {title}
        </h2>
      </div>
      <div className="description ">
        <p className="fs-6">{text}</p>
      </div>
    </div>
  );
}

export default ProductCards;
