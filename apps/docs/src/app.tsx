// @refresh reload
import "@docsearch/css";

import {
	ColorModeProvider,
	cookieStorageManagerSSR,
} from "@kobalte/core";
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { Suspense } from "solid-js";
import { MDXProvider } from "solid-mdx";

import { mdxComponents } from "./mdx-components";


export default function App() {
	const storageManager = cookieStorageManagerSSR("");

	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<Title>Kobalte</Title>
					<ColorModeProvider storageManager={storageManager}>
						<MDXProvider components={mdxComponents}>
							<Suspense>{props.children}</Suspense>
						</MDXProvider>
					</ColorModeProvider>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
