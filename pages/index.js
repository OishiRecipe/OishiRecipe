import Head from "next/head";
import styles from "../styles/Home.module.css";
import moduleName from "";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>OishiRecipe</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<footer className={styles.footer}>
				<div>
					<p>© 2021 OishiRecipe. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
