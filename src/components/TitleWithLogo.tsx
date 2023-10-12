import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { Image } from "./Image";
import style from "./TitleWithLogo.module.css";
import fabpsaSmall from "/static/img/fabpsaSmall.webp";
import fabpsaTurquoiseSmallRound from "/static/img/fabpsaTurquoiseSmallRound.webp";

interface TitleWithLogoProps
	extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {}

export const TitleWithLogo: FC<TitleWithLogoProps> = ({ children }) => (
	<div className={style.titleWithLogo}>
		<div className={style.title}>{children}</div>

		<Image
			className={clsx(style.image, "lightOnly")}
			src={fabpsaSmall}
			alt="FABPSA"
			width={50}
			height={50}
		/>

		<Image
			className={clsx(style.image, "darkOnly")}
			src={fabpsaTurquoiseSmallRound}
			alt="FABPSA"
			width={50}
			height={50}
		/>
	</div>
);
