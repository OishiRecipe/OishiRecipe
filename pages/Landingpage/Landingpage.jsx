import React from "react";
import styles from "./Landingpage.module.css";
import Image from "next/image";
import { Feature } from "../components/organisms/Feature/Feature";
import { Hero } from "../components/organisms/Hero/Hero";

const Landingpage = () => {
	return (
		<div>
			<Hero />
			<Feature />
		</div>
	);
};

export default Landingpage;
