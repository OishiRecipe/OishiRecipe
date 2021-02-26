import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<Link>Home</Link>
				<Link>Features</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
