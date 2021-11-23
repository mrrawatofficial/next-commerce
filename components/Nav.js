import {
	Avatar,
	Drawer,
	Menu,
	MenuItem,
	Box,
	List,
	ListItem,
	ListItemText,
	Divider,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { BiUser, BiHeart, BiSearch } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import styles from "../styles/nav.module.scss";

const Nav = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [openDrawer, setOpenDrawer] = useState(false);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleOpenDrawer = () => {
		setOpenDrawer(true);
	};
	const handleCloseDrawer = () => {
		setOpenDrawer(false);
	};
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
									<a className="nav-link">
										Home
										{/* <span className="visually-hidden">(current)</span> */}
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/shop">
									<a className="nav-link" href="#">
										Shop
									</a>
								</Link>
							</li>
							{/* <li className="nav-item">
								<Link href="/">
									<a className="nav-link " href="#">
										Categories
									</a>
								</Link>
							</li> */}
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
								<a className="nav-link fs-4" onClick={handleOpenDrawer}>
									<span>
										<FiShoppingCart />
									</span>
								</a>
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
								<a className="nav-link fs-4" onClick={handleClick}>
									<Avatar
										alt="Remy Sharp"
										src="https://www.ninjaonlinedating.com/blog/wp-content/uploads/2019/08/BestDatingProfilePhotosForMenKRAK.jpg"
									/>
								</a>

								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
									<MenuItem onClick={handleClose}>My account</MenuItem>
									<MenuItem onClick={handleClose}>Logout</MenuItem>
								</Menu>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
				<Box role="presentation">
					<List>
						<ListItem button>
							<ListItemText primary={"Link 1"} />
						</ListItem>
					</List>
					<List>
						<ListItem button>
							<ListItemText primary={"Link 2"} />
						</ListItem>
					</List>
					<List>
						<ListItem button>
							<ListItemText primary={"Link 3"} />
						</ListItem>
					</List>
					<List>
						<ListItem button>
							<ListItemText primary={"Link 4"} />
						</ListItem>
					</List>
				</Box>
			</Drawer>
		</nav>
	);
};

export default Nav;
