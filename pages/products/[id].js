import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiRupee } from "react-icons/bi";
import Button from "../../components/Buttons";
const singleProduct = () => {
	const { id } = useRouter().query;
	const [product, setProduct] = useState({});
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
			setProduct(res.data);
			setLoader(false);
		});
	}, [id]);
	return (
		<>
			<Head>
				<title>{product?.title}</title>
				<meta name="description" content={product?.title || "Discription"} />
			</Head>
			<section className="container-fluid py-5">
				{loader ? (
					<div className="productLoader"></div>
				) : (
					<div className="card border-0">
						<div className="row align-items-center">
							<div className="col-md-6">
								<div>
									<img
										src={product?.image}
										alt={product?.title}
										className="img img-fluid p-img d-block mx-auto"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<h4>{product?.title}</h4>
								<p>{product?.description}</p>
								<div className="mb-3">
									<strong>Price : </strong>
									<span className="text-success">
										<BiRupee />
										{Math.floor(product?.price) * 70} &nbsp;&nbsp;
									</span>
									<del>
										<span className="text-danger">
											<BiRupee />
											{Math.floor(product?.price) * 75}
										</span>
									</del>
								</div>
								<div className="form-group">
									<label>Quantity</label>
									<input
										type="number"
										min="1"
										placeholder={1}
										className="form-control p-inp w-25 mt-2 mb-4"
									/>
								</div>
								<p>
									<Button>Add to Cart</Button>
								</p>
							</div>
						</div>
					</div>
				)}
			</section>
		</>
	);
};

export default singleProduct;
