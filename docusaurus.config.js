// @ts-check

const { env, exit } = require("process");

require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const DOMAIN = env.DOMAIN;
// const GOOGLE_ANALYTICS_TRACKING_ID = env.GOOGLE_ANALYTICS_TRACKING_ID;

[DOMAIN /*GOOGLE_ANALYTICS_TRACKING_ID*/].forEach((value) => {
	if (!value) {
		console.error(`Missing environment variable`);
		exit(1);
	}
});

const envVariablesForCustomFields = [];

const customFields = Object.fromEntries(
	envVariablesForCustomFields.map(([variableName, customFieldName]) => {
		const value = env[variableName];

		if (!value) {
			console.error(`Missing value for environment variable '${variableName}'`);
			exit(1);
		}

		return [customFieldName, value];
	}),
);

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "FABPSA",
	tagline: "French Australian Bilingual Program for School Association",
	favicon: "img/favicon.ico",
	url: "https://fabpsa.au",
	baseUrl: "/",

	trailingSlash: false,

	i18n: {
		defaultLocale: "en",
		locales: ["en", "fr"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
				},
				blog: {
					blogTitle: "FABPSA's blog",
					blogDescription:
						"The blog of the French Australian Bilingual Program for School Association",
					blogSidebarTitle: "Latest posts",
					blogSidebarCount: "ALL",
					postsPerPage: "ALL",
					feedOptions: {
						type: "all",
						title: "FABPSA's blog",
						description:
							"The blog of the French Australian Bilingual Program for School Association",
						copyright: `Copyright © ${new Date().getFullYear()} FABPSA.`,
					},
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [
				{
					name: "keywords",
					content: "french, english, bilingual, australia, association",
				},
			],
			colorMode: {
				respectPrefersColorScheme: true,
			},
			image: "img/tbd.jpg", //////////////////////// TBD
			navbar: {
				title: "FABPSA",
				logo: {
					alt: "FABPSA's logo",
					src: "img/logo.svg", //////////////////////// TBD
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "projectSidebar",
						label: "The Project",
					},
					{
						to: "/blog",
						label: "FABPSA's Blog",
					},
					{
						type: "localeDropdown",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "The project",
						items: [
							{
								label: "Introduction",
								to: "/docs/introduction",
							},
						],
					},
					{
						title: "About Us",
						items: [
							{
								label: "Céline & Julie",
								to: "/about-us",
							},
						],
					},
					{
						title: "Articles",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Facebook",
								href: "https://www.facebook.com/people/Fabpsa-French-Australian-Bilingual-Program-for-School-Association-Inc/100081751441463/",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} FABPSA.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	customFields,
};

module.exports = config;
