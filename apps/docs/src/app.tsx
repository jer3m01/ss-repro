// @refresh reload
import { Route, Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { Introduction } from "./introduction";
import { GettingStarted } from "./getting-started";

export default function App() {

	return (
		<Router
			root={(props) => (
				<Suspense>{props.children}</Suspense>
			)}
			>
			<Route path="/" component={Introduction} />
			<Route path="/getting-started" component={GettingStarted} />
		</Router>
	);
}
