import { useEffect } from "react";

export const LanguageCookie = () => {
	useEffect(() => {
		// Just trying to set the cookie to `en` so:
		// - on very first visit, Netlify redirects us to `/fr`
		// - on subsequent visits, Netlify lets us go to `/`
		// but it doesn't work (see commit message)
		const language = "en"; //location.pathname.startsWith("/fr/") ? "fr" : "en";

		console.log(`Setting language to ${language}`);

		document.cookie = `nf_lang=${language}; Path=/`;
	}, []);

	return null;
};
