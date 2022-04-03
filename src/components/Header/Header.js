import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
	return (
		<nav className="navbar">
			<img src={logo} alt="" />
			<div className="nav-links">
				<CustomLink to="/Shop">Shop</CustomLink>
				<CustomLink to="/Orders">Orders</CustomLink>
				<CustomLink to="/Inventory">Inventory</CustomLink>
				<CustomLink to="/About">About</CustomLink>
			</div>
		</nav>
	);
};

export default Header;
