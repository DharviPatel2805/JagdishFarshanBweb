import styles from "./ProductCard.module.css";

function ProductCard(props) {
  
  return (
    <div
      className="col-lg-3 col-md-4 col-sm-4 card"
      style={{
        width: "18rem",
        borderRadius: "15%",
        margin: "15px auto",
        borderStyle: "dashed",
        borderColor: "rgb(116, 42, 42)"
      }}
    >
      <img
        className="card-img-top"
        style={{ height: "280px", padding: "25px 20px 18px 20px" }}
        src={props.img}
        alt="product"
      />
      <div
        className="card-body"
        style={{ padding: "0 20px 20px 20px", textAlign: "center" }}
      >
        <p className="card-text" style={{ fontSize: "22px" }}>
          <strong>{props.name}</strong>
        </p>
        <span style={{ color: "rgb(116, 42, 42)" }}>
          <strong>{props.price}</strong>
        </span>
        <button className={styles.icon}>
          <i className="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
