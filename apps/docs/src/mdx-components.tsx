import { Button } from "@kobalte/core";
import { Title as MetaTitle } from "@solidjs/meta";
import { clsx } from "clsx";
import { ComponentProps, Show, createSignal, splitProps } from "solid-js";

import { CheckIcon, CopyIcon } from "./components";

export const mdxComponents = {
	h1: (props: ComponentProps<"h1">) => {
		const [local, others] = splitProps(props, ["children"]);

		return (
			<h1 {...others}>
				<MetaTitle>{`${local.children} – Kobalte`}</MetaTitle>
				{local.children}
			</h1>
		);
	},
};
