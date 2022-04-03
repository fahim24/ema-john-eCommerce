import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart(products);

	const addToCart = (newProduct) => {
		let newCart;
		const exist = cart.find((product) => product.id === newProduct.id);
		if (!exist) {
			newProduct.quantity = 1;
			newCart = [...cart, newProduct];
		} else {
			const rest = cart.filter((product) => product.id !== exist.id);
			exist.quantity++;
			newCart = [...rest, exist];
		}

		setCart(newCart);
		addToDb(newProduct.id);
	};
	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product key={product.id} product={product} addToCart={addToCart}></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<Link to="/orders">
						<button>Review Order</button>
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Shop;
