import React from "react";
import styles from "./Landingpage.module.css";
import Image from "next/image";

const Landingpage = () => {
	return (
		<div>
			<header className={(styles.vHeader, styles.container)}>
				<div className={styles.fullscreenVideoWrapper}>
					<video src='/videos/heroVid.mp4' type='video/mp4' autoPlay='true' loop='true'></video>
				</div>
				<div className='header-overlay'></div>
				<div className='cta'>
					<h1>Hello to Oishie Recipies</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit labore quaerat
						omnis corporis voluptate blanditiis animi doloremque incidunt tempore.
					</p>
					<button className={styles.ctaButton}>Get started</button>
				</div>
			</header>
			<div className='features'></div>
		</div>
	);
};

export default Landingpage;
