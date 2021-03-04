import React from "react";
import styles from "./Landingpage.module.css";

const Landingpage = () => {
	return (
		<div>
			<div class='hero'>
				<div className='cta'>
					<div className='cta-text'></div>
					<button className={styles.ctaButton}>Ready to cook</button>
				</div>
			</div>
			<div className='features'></div>
		</div>
	);
};

export default Landingpage;
