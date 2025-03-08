import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect } from "react";
import { LOCALE_KEY } from "../lib/local-storage-keys";

export const LocaleManager = () => {
	const {
		i18n: { currentLocale, locales },
	} = useDocusaurusContext();

	useEffect(() => {
		console.log("-----");
		console.log(currentLocale);
		console.log(locales);
		console.log(navigator.languages);

		console.log(`ls: ${localStorage.getItem(LOCALE_KEY)}`);

		console.log(
			navigator.languages.flatMap((locale) =>
				locale.includes("-") ? [locale, locale.split("-")[0]] : locale,
			),
		);

		console.log(
			navigator.languages
				.flatMap((locale) =>
					locale.includes("-") ? [locale, locale.split("-")[0]] : locale,
				)
				.find((locale) => currentLocale.includes(locale)),
		);

		console.log("the fuck");

		const preferredLocale =
			localStorage.getItem(LOCALE_KEY) ||
			navigator.languages
				.flatMap((locale) =>
					locale.includes("-") ? [locale, locale.split("-")[0]] : locale,
				)
				.find((locale) => {
					console.log(`${locale} - ${currentLocale.includes(locale)}`);
					return currentLocale.includes(locale);
				}) ||
			"en";

		console.log(preferredLocale);

		if (currentLocale !== preferredLocale) {
			location.replace(preferredLocale === "en" ? "/" : `/${preferredLocale}`);
		}
	}, [currentLocale, locales]);

	return null;
};
