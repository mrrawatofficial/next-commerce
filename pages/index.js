import Head from "next/head";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

export default function Home() {
	return (
		<>
			<Head>
				<title>Testing Commerce</title>
				<meta name="description" content="testing" />
			</Head>
			<Banner />
			<ProductList />
		</>
	);
}
