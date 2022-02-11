/* Components */
/* Pages */
import Page1 from "./pages/Page1";
/* React */
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

/* Code */

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Page1} />
			</Switch>
		</Router>
	);
}
