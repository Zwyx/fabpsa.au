// @ts-check

const { env, exit } = require("process");

require("dotenv").config();

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const DOMAIN = env.DOMAIN;
const PLAUSIBLE_SCRIPT_SRC = env.PLAUSIBLE_SCRIPT_SRC;

[DOMAIN, PLAUSIBLE_SCRIPT_SRC].forEach((value) => {
	if (!value) {
		console.error(`Missing environment variable`);
		exit(1);
	}
});

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "FABPSA",
	tagline: "French Australian Bilingual Program for School Association",
	favicon: "img/favicon.png",
	url: `https://${DOMAIN}`,
	baseUrl: "/",

	trailingSlash: false,

	scripts: [
		{
			src: PLAUSIBLE_SCRIPT_SRC,
			defer: true,
			"data-domain": DOMAIN,
		},
	],

	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: false,
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
					content: "french, english, bilingual Program, school",
				},
			],
			colorMode: {
				respectPrefersColorScheme: true,
				disableSwitch: true,
			},
			image: "img/fabpsa.png",
			navbar: {
				logo: {
					alt: "FABPSA logo",
					src: "img/fabpsa.png",
					href: "/",
				},
				title: "FABPSA",
				items: [
					{ to: "/about-us", label: "About us" },
					{ to: "/the-project", label: "The Project" },
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Contact",
						items: [
							{
								label: "Email",
								href: "mailto:contact@fabpsa.au",
							},
							{
								label: "Facebook",
								href: "https://www.facebook.com/profile.php?id=100081751441463",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} FABPSA`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
