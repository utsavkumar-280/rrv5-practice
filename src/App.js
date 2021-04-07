import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	useParams,
	Switch,
} from "react-router-dom";
import "./App.css";

const Home = () => {
	const { id } = useParams();
	return (
		<div className="comp">
			<h1>id {id}</h1>
		</div>
	);
};

function App() {
	return (
		<Router>
			<div className="app">
				<ul>
					<li>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/profile">Profile</Link>
					</li>
				</ul>
				<Switch>
					<Route path="/:id">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
