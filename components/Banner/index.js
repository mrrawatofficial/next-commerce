import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Button from "../Buttons";
import styles from "./banner.module.scss";
const index = () => {
	const [slidersItem, setSlidersItem] = useState([
		{
			id: 1,
			image:
				"https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
			title: "Title 1",
			description: "Description 1",
		},
		{
			id: 2,
			image:
				"https://images.unsplash.com/photo-1633113088983-12fb3b2fe0ac?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
			title: "Title 2",
			description: "Description 2",
		},
		{
			id: 3,

			image:
				"https://images.unsplash.com/photo-1568905096967-86c59329c561?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80",
			title: "Title 3",
			description: "Description 3",
		},
	]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<section className={styles.slider}>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-md-12">
						<Slider {...settings}>
							{slidersItem.map((item) => (
								<div key={item.id} className={styles.sliderItem}>
									<img
										src={item.image}
										alt={item.title}
										className="img img-fluid w-100"
									/>
									<div className={styles.content}>
										<h2>{item.title}</h2>
										<p>{item.description}</p>
										<Button>Buy Now</Button>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default index;
