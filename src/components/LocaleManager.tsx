import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect } from "react";
import { LOCALE_KEY } from "../lib/local-storage-keys";

export const LocaleManager = () => {
	const {
		i18n: { currentLocale, locales },
	} = useDocusaurusContext();

	useEffect(() => {
		const preferredLocale =
			localStorage.getItem(LOCALE_KEY) ||
			navigator.languages
				.flatMap((locale) =>
					locale.includes("-") ? [locale, locale.split("-")[0]] : locale,
				)
				.find((locale) => locales.includes(locale)) ||
			"en";

		if (
			currentLocale !== preferredLocale &&
			locales.includes(preferredLocale)
		) {
			location.replace(preferredLocale === "en" ? "/" : `/${preferredLocale}`);
		}
	}, [currentLocale, locales]);

	return null;
};
