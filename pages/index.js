import Head from "next/head";
import styles from "../styles/Home.module.css";

import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import Landingpage from "./Landingpage/Landingpage";
import { Footer } from "./components/organisms/Footer/Footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>OishiRecipe</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />
			<Landingpage />
			<Footer />
		</div>
	);
}
