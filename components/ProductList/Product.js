import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import Button from "../../components/Buttons";
import styles from "./products.module.scss";
import { IconButton } from "@mui/material";
const Product = ({ prodBgColor, items }) => {
	const [liked, setLiked] = useState(false);
	const handleLike = () => {
		setLiked(!liked);
	};
	return (
		<div className="col-md-3">
			<div className={styles.product}>
				<Link href={`/products/${items.id}`}>
					<div
						className={styles.productHeader}
						style={{ "--color": prodBgColor }}
					>
						<span onClick={handleLike}>
							<IconButton
								className={`${styles.wishList} ${liked && styles.liked}`}
							>
								{liked ? <BsFillHeartFill /> : <FiHeart />}
							</IconButton>
						</span>
						<img
							src={items.image}
							alt={items.title}
							className={styles.productImage}
						/>
					</div>
				</Link>
				<div className={styles.productDetails}>
					<Link href={`/products/${items.id}`}>
						<h5 className="text-truncate">{items.title}</h5>
					</Link>
					<div className={styles.productAction}>
						<div className={styles.productPrice}>
							<del className="text-danger">
								<BiRupee /> {Math.floor(items.price) * 30}
							</del>
							<br />
							<BiRupee /> {Math.floor(items.price) * 55}
						</div>
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
