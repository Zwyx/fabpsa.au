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
		{
			src: "https://f.convertkit.com/ckjs/ck.5.js",
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
			image: "img/fabpsa.webp",
			navbar: {
				logo: {
					alt: "Fabpsa logo",
					src: "img/fabpsaSmall.webp",
					srcDark: "img/fabpsaDarkSmall.webp",
					href: "/",
				},
				title: "FABPSA",
				items: [
					{ to: "/about-us", label: "About us" },
					{
						type: "dropdown",
						label: "Our project",
						items: [
							{ to: "/our-vision", label: "Our vision" },
							{ to: "/our-goals", label: "Our goals" },
							{ to: "/our-action-plan", label: "Our action plan" },
						],
					},
					{ to: "/the-program", label: "The program" },
					{ to: "/our-team", label: "Our team" },
					{ to: "/supporting-us", label: "Supporting us" },
					{ to: "/resources", label: "Resources" },
					{ to: "mailto:contact@fabpsa.au", label: "Contact us" },
				],
			},
			footer: {
				style: "dark",
				copyright: `Copyright © ${new Date().getFullYear()} FABPSA Inc/ACNC`,
				logo: {
					alt: "Fabpsa logo",
					src: "img/fabpsaDarkSmall.webp",
					href: "/",
					width: "75px",
					height: "75px",
					className: "footerImage",
				},
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
