import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark p-3">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Home
				</Link>
				<ul className="navbar-nav me-auto">
					<li className="nav-item px-2">
						<Link className="nav-link py-0" aria-current="page" to="/">
							Search
						</Link>
					</li>
					<li className="nav-item px-2">
						<Link className="nav-link py-0" to="/saved">
							Saved
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
