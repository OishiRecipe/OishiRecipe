import Head from "next/head";
import styles from "../styles/Home.module.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";
import Landingpage from "./Landingpage/Landingpage";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>OishiRecipe</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Landingpage} />
				</Switch>
			</BrowserRouter>

			<footer className={styles.footer}>
				<div>
					<p>© 2021 OishiRecipe. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
