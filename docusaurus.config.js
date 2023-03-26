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
	favicon: "img/favicon.ico", //////////////////////// TBD
	url: "https://fabpsa.au",
	baseUrl: "/",

	trailingSlash: false,

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
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
					exclude:
						env.NODE_ENV !== "development"
							? ["*-xx-*/*", "draft*/*"] // Exclude drafts
							: undefined,
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
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Tutorial",
					},
					{
						to: "/blog",
						label: "Blog",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Facebook",
								href: "https://facebook.com/",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} French Australian Bilingual Program for School Association Incorporated.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	customFields,
};

module.exports = config;
