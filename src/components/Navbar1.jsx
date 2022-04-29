import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/navbar1.css";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="Navbar">
			<Link to={"/rgp-73-store"}>
				<span className="nav-logo">Tasty</span>
			</Link>
			<div className={`nav-items ${isOpen && "open"}`}>
				<Link to="/rgp-73-store" className="link" onClick={() => setIsOpen(!isOpen)}>
					HOME
				</Link>
				<Link to="/rgp-73-store/about" className="link" onClick={() => setIsOpen(!isOpen)}>
					ABOUT
				</Link>
				<Link to="/rgp-73-store/products" className="link" onClick={() => setIsOpen(!isOpen)}>
					PRODUCTS
				</Link>
				<Link to="/rgp-73-store/contact" className="link" onClick={() => setIsOpen(!isOpen)}>
					CONTACT
				</Link>
			</div>
			<div
				className={`nav-toggle ${isOpen && "open"}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="bar"></div>
			</div>
		</div>
	);
};

export default Navbar;
