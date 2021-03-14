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
				<div className='social-links'>
					<AiFillFacebook />
					<AiOutlineInstagram />
					<AiFillTwitterSquare />
					<AiFillLinkedin />
					<FaXingSquare />
				</div>
				<p>© 2021 OishiRecipe. All rights reserved.</p>
			</div>
		</footer>
	);
};
