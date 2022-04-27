import Navbar from "./Navbar1";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

import React from "react";

const Wrapper = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default Wrapper;
