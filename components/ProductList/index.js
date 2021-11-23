// import { useEffect, useState } from "react";
// import axios from "axios";
import Product from "./Product";

const index = ({ staticProduct }) => {
	return (
		<section className="section">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<h3 className="page-title">All Product List</h3>
					</div>
				</div>
				<div className="row">
					{/* <div className="col-md-12">asdfasd</div> */}
					{staticProduct.map((product) => {
						return <Product key={product.id} items={product} />;
					})}
					{/* <Product prodBgColor="#ffe3e3" />
					<Product prodBgColor="#efe3ff" />
					<Product prodBgColor="#e3efff" />
					<Product prodBgColor="#f3ffe3" />
					<Product prodBgColor="#ffe3e3" />
					<Product prodBgColor="#efe3ff" />
					<Product prodBgColor="#e3efff" />
					<Product prodBgColor="#f3ffe3" /> */}
				</div>
			</div>
		</section>
	);
};

export default index;
