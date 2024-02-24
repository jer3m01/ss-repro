import { RouteProps } from "@solidjs/router";

import { Layout } from "../../components";
import { NavSection } from "../../model/navigation";

const CORE_NAV_SECTIONS: NavSection[] = [
	{
		title: "Overview",
		links: [
			{
				title: "Introduction",
				href: "/docs/core/overview/introduction",
			},
			{
				title: "Getting started",
				href: "/docs/core/overview/getting-started",
			},
		],
	},
];

export default function CoreLayout(props: RouteProps<string>) {
	return <Layout navSections={CORE_NAV_SECTIONS}>{props.children}</Layout>;
}
