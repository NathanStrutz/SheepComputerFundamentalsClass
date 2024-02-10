import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Computing Fundamentals",
	description:
		"Information for Parents and Students about the SHEEP Computing Fundamentals class",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Menu",
				items: [
					{ text: "Contact", link: "/contact" },
					{ text: "Your Teachers", link: "/about-your-teachers" },
					{ text: "What We Learn", link: "/what-we-learn" },
					{ text: "Homework Overview", link: "/homework" },
					{ text: "Computers", link: "/computer" },
					{ text: "Computer Shopping", link: "/computer-shopping" },
				],
			},
		],
	},
});
