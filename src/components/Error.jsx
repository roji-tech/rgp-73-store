import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div>
			<h2>Error</h2>
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
	);
};

export default Error;
