import { RouteProps } from "@solidjs/router";

import { Layout } from "../../components";

export default function CoreLayout(props: RouteProps<string>) {
	return <Layout>{props.children}</Layout>;
}
