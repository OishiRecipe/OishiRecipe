import React from "react";
import Head from "next/head";

const companyName = process.env.COMPANY_NAME;

export default function Signin() {
	return (
		<div>
			<Head>
				<title>OishiRecipe | Signin</title>
				{/* <title>{`${env.COMPANY_NAME}`}</title> */}
			</Head>
		</div>
	);
}
