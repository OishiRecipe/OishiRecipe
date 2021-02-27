import React from "react";
import Link from "next/Link";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
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
