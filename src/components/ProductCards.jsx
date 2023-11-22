import "../styles/ProductCards.css";

function ProductCards({ img, title, text }) {
  return (
    <div className="product-card d-flex flex-column" style={{ maxWidth: '290px', width: '100%', height: '215px' }}>

      <div className="product_card_wrapper">
        <div className="card_header">
          <h2>
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

    </div>
  );
}

export default ProductCards;
