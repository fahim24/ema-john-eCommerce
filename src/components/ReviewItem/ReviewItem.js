import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
	const { product, handleRemoveProduct } = props;
	const { name, price, shipping, quantity, img } = product;
	return (
		<div className="review-item">
			<div>
				<img src={img} alt="" />
			</div>
			<div className="review-item-details">
				<div>
					<h4>{name}</h4>
					<p>Price: ${price}</p>
					<p>Shipping: ${shipping}</p>
					<p>Quantity: {quantity}</p>
				</div>
				<button onClick={() => handleRemoveProduct(product)}>
					<FontAwesomeIcon className="delete-icon" icon={faTrashAlt}></FontAwesomeIcon>
				</button>
			</div>
		</div>
	);
};

export default ReviewItem;
