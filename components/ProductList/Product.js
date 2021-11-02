import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import Button from "../../components/Buttons";
import styles from "./products.module.scss";
const Product = () => {
	const [liked, setLiked] = useState(false);
	const handleLike = () => {
		setLiked(!liked);
	};
	return (
		<div className="col-md-4">
			<div className={styles.product}>
				<div className={styles.productHeader} style={{ "--color": "#bdacff" }}>
					<span
						className={`${styles.wishList} ${liked && styles.liked}`}
						onClick={handleLike}
					>
						{liked ? <BsFillHeartFill /> : <FiHeart />}
					</span>
					<img
						src="https://www.pngmart.com/files/5/Diamond-Necklace-PNG-Clipart.png"
						alt="product"
						className={styles.productImage}
					/>
				</div>
				<div className={styles.productDetails}>
					<Link href="/">
						<h3 className={styles.productTitle}>Product Title</h3>
					</Link>
					<div className={styles.productAction}>
						<div className={styles.productPrice}>Rs. 1000</div>
						<Button secondary>
							<FiShoppingCart />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
