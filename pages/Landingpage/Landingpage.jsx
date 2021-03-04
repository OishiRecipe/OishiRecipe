import React from "react";
import styles from "./Landingpage.module.css";
import heroImg from "../../images/heroImg.png";

const Landingpage = () => {
	return (
		<div>
			<div class={styles.hero}>
				<div className='cta'>
					<img src={heroImg} alt='' />
					<div className='cta-text'>
						You wanna explore the culinary world and wanna follow a step by step guide on how to
						cook it. Then theres is no need to look further just head in and share your culinary
						Recipes with the World.
					</div>
					<button className={styles.ctaButton}>Ready to cook</button>
				</div>
			</div>
			<div className='features'></div>
		</div>
	);
};

export default Landingpage;
