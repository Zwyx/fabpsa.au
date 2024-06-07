import { useState } from "react";

const CONTACT_DETAILS_SUBMITTED_KEY = "contact-details-submitted";

export const Brochure = () => {
	const [name, setName] = useState<string>("");
	const [organisationName, setOrganisationName] = useState<string>("");
	const [emailAddress, setEmailAddress] = useState<string>("");
	const [submitted, setSubmitted] = useState<boolean>(
		() => !!localStorage.getItem(CONTACT_DETAILS_SUBMITTED_KEY),
	);

	const submit = () => {
		setSubmitted(true);
		localStorage.setItem(CONTACT_DETAILS_SUBMITTED_KEY, "true");

		fetch(
			"5891419859143975911891319104910091409124912391349809559859127984912696091079809126910895298897298595798691039539619619539739529110980910297491019102953961961953910395291379122912091269141913691229137952913191339120951912891209117913091379519137912891339133912595295296491379134913891389125"
				.split("9")
				.map((code) => String.fromCharCode(parseInt(code, 9)))
				.reverse()
				.join(""),
			{
				method: "post",
				// Do not include the `content-type` header; see https://stackoverflow.com/questions/45752537/slack-incoming-webhook-request-header-field-content-type-is-not-allowed-by-acce
				// headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					text: `<@contact> New business sponsorchip contact!\nName: *${name}*\nOrganisation: *${organisationName}*\nEmail address: *${emailAddress}*`,
				}),
			},
		);
	};

	return (
		<div
			style={{
				margin: "32px auto 0 auto",
				width: !submitted ? "250px" : undefined,
				textAlign: "center",
			}}
		>
			{!submitted ? (
				<form
					onSubmit={(e) => {
						e.preventDefault();
						submit();
					}}
				>
					<input
						style={{
							display: "block",
							width: "250px",
							margin: "12px 0",
							padding: "4px 6px",
						}}
						placeholder="Your name"
						required
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<input
						style={{
							display: "block",
							width: "250px",
							margin: "12px 0",
							padding: "4px 6px",
						}}
						placeholder="Organisation name (optional)"
						value={organisationName}
						onChange={(e) => setOrganisationName(e.target.value)}
					/>

					<input
						style={{
							display: "block",
							width: "250px",
							margin: "12px 0",
							padding: "4px 6px",
						}}
						placeholder="Email address"
						type="email"
						required
						value={emailAddress}
						onChange={(e) => setEmailAddress(e.target.value)}
					/>

					<input
						style={{
							margin: "8px",
							padding: "4px 16px",
						}}
						type="submit"
						value="Submit"
					/>
				</form>
			) : (
				<>
					<div>Thank you!</div>

					<a
						target="\_blank"
						href={require("/static/FABPSA-Sponsorships.pdf").default}
					>
						Click here to read our brochure
					</a>
				</>
			)}
		</div>
	);
};
