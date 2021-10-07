import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light ">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Start Over</span>
				</Link>
			</div>
		</nav>
	);
};
