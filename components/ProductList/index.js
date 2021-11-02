import Product from "./Product";

const index = () => {
	return (
		<section className="section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h3 className="page-title">All Product List</h3>
					</div>
				</div>
				<div className="row">
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</section>
	);
};

export default index;
