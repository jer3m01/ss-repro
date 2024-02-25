import { useLocation } from "@solidjs/router";
import { ParentProps, Show } from "solid-js";

interface LayoutProps extends ParentProps {
}

export function Layout(props: LayoutProps) {
	return (
		<>{props.children}</>
	);
}
