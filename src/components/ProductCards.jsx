import "../styles/ProductCards.css";

function ProductCards({ img, title, text }) {
  return (
    <div className="product-card h-100">
      <h2>
        <span>
          <img src={img} alt="" />
        </span>
        {title}
      </h2>
      <p className="fs-6">{text}</p>
    </div>
  );
}

export default ProductCards;
