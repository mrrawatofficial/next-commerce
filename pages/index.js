import Head from "next/head";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

export default function Home({ staticProduct }) {
	return (
		<>
			<Head>
				<title>Testing Commerce</title>
				<meta name="description" content="testing" />
			</Head>
			<Banner />
			<ProductList staticProduct={staticProduct} />
		</>
	);
}
export async function getStaticProps() {
	const res = await fetch("https://fakestoreapi.com/products");
	const staticProduct = await res.json();
	return {
		props: {
			staticProduct,
		},
	};
}
