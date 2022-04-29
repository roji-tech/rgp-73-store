import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/navbar1.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openCloseNav = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className="Navbar" onClick={openCloseNav}>
			<Link to={"/rgp-73-store"}>
				<span className="nav-logo">Tasty</span>
			</Link>
			<div className={`nav-items ${isOpen && "open"}`}>
				<Link to="/rgp-73-store" className="link" onClick={openCloseNav}>
					HOME
				</Link>
				<Link to="/rgp-73-store/about" className="link" onClick={openCloseNav}>
					ABOUT
				</Link>
				<Link to="/rgp-73-store/products" className="link" onClick={openCloseNav}>
					PRODUCTS
				</Link>
				<Link to="/rgp-73-store/contact" className="link" onClick={openCloseNav}>
					CONTACT
				</Link>
			</div>
			<div
				className={`nav-toggle ${isOpen && "open"}`}
				onClick={openCloseNav}
			>
				<div className="bar"></div>
			</div>
		</div>
	);
};

export default Navbar;
