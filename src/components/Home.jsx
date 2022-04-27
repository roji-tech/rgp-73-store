import React from "react";
// Component import
import Banner from "./Banner";
import Products from "./Products";

import "../css/home.css";

const Home = () => {
	return (
		<>
			<Banner />
			<div>
				<h2 style={{ fontSize: "60px" }}>RGP-73 Store</h2>
			</div>
			<div>
				<Products />
			</div>
		</>
	);
};

export default Home;
