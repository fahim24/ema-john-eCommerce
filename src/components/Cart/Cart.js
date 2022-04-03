import React from "react";
import "./Cart.css";

const Cart = ({ cart, children }) => {
	let total = 0;
	let shippingTotal = 0;
	let quantity = 0;
	for (const product of cart) {
		quantity += product.quantity;
		total += product.price * product.quantity;
		shippingTotal += product.shipping;
	}
	const taxTotal = parseFloat((total * 0.1).toFixed(2));
	const grandTotal = total + shippingTotal + taxTotal;
	return (
		<div className="cart">
			<h3>Order Summary</h3>
			<p>Selected items: {quantity}</p>
			<p>Total Price: ${total}</p>
			<p>Total Shipping Charge: ${shippingTotal}</p>
			<p>Tax: ${taxTotal}</p>
			<h4>Grand Total: ${grandTotal}</h4>
			{children}
		</div>
	);
};

export default Cart;
