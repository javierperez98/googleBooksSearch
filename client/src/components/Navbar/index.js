import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
			<div className="container-fluid">
				<Link className="navbar-brand fs-2" to="/">
					Books Directory
				</Link>
				<ul className="navbar-nav me-auto">
					<li className="nav-item px-2">
						<Link className="nav-link" aria-current="page" to="/search">
							Search
						</Link>
					</li>
					<li className="nav-item px-2">
						<Link className="nav-link" to="">
							Saved
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
