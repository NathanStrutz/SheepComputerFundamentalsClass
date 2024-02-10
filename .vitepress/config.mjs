import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Computer Fundamentals",
	description:
		"Information for Parents and Students about the SHEEP Computer Fundamentals class",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Google Classroom", link: "https://classroom.google.com/" },
		],

		sidebar: [
			{
				text: "Menu",
				items: [
					{ text: "When & Where", link: "/vital-information" },
					{ text: "Contact", link: "/contact" },
					{ text: "Your Teachers", link: "/about-your-teachers" },
					{ text: "What We Learn", link: "/syllabus" },
					{ text: "Homework Overview", link: "/homework" },
					{ text: "Computers", link: "/computer" },
					{ text: "Computer Shopping", link: "/computer-shopping" },
				],
			},
		],
	},
});
