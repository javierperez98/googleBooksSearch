import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route exact path="/">
					<Search />
				</Route>
				<Route exact path="/saved">
					<Saved />
				</Route>
			</div>
		</Router>
	);
}

export default App;
