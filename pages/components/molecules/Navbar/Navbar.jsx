import React from "react";
import Link from "next/Link";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/'>About</Link>
					<Link href='/'>Features</Link>
					<Link href='/'>Blog</Link>
					<Link href='/'>Support</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
