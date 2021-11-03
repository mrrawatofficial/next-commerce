import Link from "next/link";
import { BiUser, BiHeart, BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles/nav.module.scss";

const Nav = () => {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-dark bg-primary sticky-top ${styles.navbar}`}
		>
			<div className="container-fluid">
				<Link href="/">
					<a className="navbar-brand">Navbar</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasExample"
					aria-controls="offcanvasExample"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div
					className="offcanvas offcanvas-end bg-primary"
					tabIndex={-1}
					id="offcanvasExample"
					aria-labelledby="offcanvasExampleLabel"
				>
					<div className="offcanvas-header">
						<h5 className="offcanvas-title" id="offcanvasExampleLabel">
							Offcanvas
						</h5>
						<button
							type="button"
							className="btn-close text-reset"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						/>
					</div>
					<div className="offcanvas-body">
						<ul className="navbar-nav align-items-center ms-auto">
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link active">
										Home
										<span className="visually-hidden">(current)</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link" href="#">
										Shop
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/">
									<a className="nav-link " href="#">
										Categories
									</a>
								</Link>
							</li>
						</ul>

						<ul className="navbar-nav ms-auto">
							<li className="nav-item px-2 rounded me-2">
								<Link href="/">
									<a className="nav-link fs-4">
										<span>
											<BiSearch />
										</span>
									</a>
								</Link>
							</li>
							<li className="nav-item px-2 rounded me-2">
								<Link href="/">
									<a className="nav-link fs-4">
										<span>
											<FiShoppingCart />
										</span>
									</a>
								</Link>
							</li>
							<li className="nav-item px-2 rounded me-2">
								<Link href="/">
									<a className="nav-link fs-4">
										<span>
											<BiHeart />
										</span>
									</a>
								</Link>
							</li>
							<li className="nav-item px-2 rounded me-2">
								<Link href="/">
									<a className="nav-link fs-4">
										<span>
											<BiUser />
										</span>
									</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
