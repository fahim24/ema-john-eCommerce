import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart(products);
	const handleRemoveProduct = (product) => {
		const rest = cart.filter((pd) => pd.id !== product.id);
		setCart(rest);
		removeFromDb(product.id);
	};
	return (
		<div className="shop-container">
			<div className="review-items-container">
				{cart.map((product) => (
					<ReviewItem
						key={product.id}
						handleRemoveProduct={handleRemoveProduct}
						product={product}
					></ReviewItem>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<Link to="/shipment">
						<button>Check out</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Orders;
