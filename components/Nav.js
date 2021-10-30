import styles from "../styles/nav.module.scss";

const Nav = () => {
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-dark bg-primary sticky-top ${styles.navbar}`}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
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
						<ul className="navbar-nav me-auto">
							<li className="nav-item">
								<a className="nav-link active" href="#">
									Home
									<span className="visually-hidden">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									data-bs-toggle="dropdown"
									href="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Dropdown
								</a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
									<div className="dropdown-divider" />
									<a className="dropdown-item" href="#">
										Separated link
									</a>
								</div>
							</li>
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-sm-2"
								type="text"
								placeholder="Search"
							/>
							<button className="btn btn-secondary" type="submit">
								Search
							</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
