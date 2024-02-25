import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
	start: {
		server: {
			preset: (process.env.GITHUB_ACTIONS || process.env.DEVELOPMENT) ? "node-server" : "netlify",
		},
	}
});
