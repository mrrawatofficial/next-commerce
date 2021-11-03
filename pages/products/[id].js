import { useRouter } from "next/router";
const singleProduct = () => {
	const { id } = useRouter().query;
	// console.log(id);
	return (
		<div>
			<h3>{id}</h3>
		</div>
	);
};

export default singleProduct;
