import React from "react";
import Navbar from "./Navbar1";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../css/error.css";

const Error = () => {
	return (
		<div>
			<Navbar />
			<div className="error-wrap">
				<h2 className="error">Error</h2>
				<p>Page Not Found</p>
				<Link
					to="/rgp-73-store"
					style={{
						color: "white",
						margin: "10px",
						background: "white",
						fontSize: "30px",
					}}
				>
					<p>Click to go back to Home Page </p>
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default Error;
