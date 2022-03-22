import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
	const { addToCart, product } = props;
	const { img, name, price, seller, ratings } = product;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-info">
				<h5 className="product-name">{name}</h5>
				<h6 className="product-price">Price: ${price}</h6>
				<p className="product-seller">
					<small>Manufacturer: {seller}</small>
				</p>
				<p className="product-ratings">
					<small>Rating: {ratings} star</small>
				</p>
			</div>
			<button onClick={() => addToCart(product)} className="cart-btn">
				<p>Add to cart</p>
				<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
