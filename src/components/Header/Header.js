import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
	const [user] = useAuthState(auth);

	const handleSignOut = () => {
		signOut(auth);
	};
	return (
		<nav className="navbar">
			<img src={logo} alt="" />
			<div className="nav-links">
				<CustomLink to="/shop">Shop</CustomLink>
				<CustomLink to="/orders">Orders</CustomLink>
				<CustomLink to="/inventory">Inventory</CustomLink>
				<CustomLink to="/about">About</CustomLink>
				{user ? (
					<button onClick={handleSignOut}>Sign Out</button>
				) : (
					<CustomLink to="/login">Login</CustomLink>
				)}
			</div>
		</nav>
	);
};

export default Header;
