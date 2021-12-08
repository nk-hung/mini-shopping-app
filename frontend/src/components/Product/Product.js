import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({imageUrl, name, description, price, productId }) => {
  return (
    <div className="product">
      <img 
        src={imageUrl} 
        alt={name}
      />

      <div className="product__info">
        <p className="info__name">{name}}</p>
        <p className="info__description">{description.subString(0,100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__btn">View</Link>
      </div>
    </div>
  )
}

export default Product
