import Head from "next/head";
import ProductList from "../components/ProductList";

export default function Shop({ staticProduct }) {
	return (
		<>
			<Head>
				<title>Testing Commerce shop page</title>
				<meta name="description" content="testing" />
			</Head>
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
