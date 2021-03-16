import React from "react";
import styles from "./Footer.module.css";
import {
	AiFillLinkedin,
	AiOutlineInstagram,
	AiFillTwitterSquare,
	AiFillFacebook,
} from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div>
				<div className={styles.socialLinks}>
					<a href='https://www.facebook.com' target='__blank'>
						<AiFillFacebook className={styles.link} />
					</a>
					<a href='https://www.instagram.com' target='__blank'>
						<AiOutlineInstagram className={styles.link} />
					</a>
					<a href='https://www.twitter.com' target='__blank'>
						<AiFillTwitterSquare className={styles.link} />
					</a>
					<a href='https://www.linkedin.com' target='__blank'>
						<AiFillLinkedin className={styles.link} />
					</a>
					<a href='https://www.xing.com' target='__blank'>
						<FaXingSquare className={styles.link} />
					</a>
				</div>
				<p>© 2021 OishiRecipe. All rights reserved.</p>
			</div>
		</footer>
	);
};
