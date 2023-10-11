import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { Image } from "./Image";
import style from "./TitleWithLogo.module.css";
import fabpsa from "/static/img/fabpsaSmall.webp";
import fabpsaTurquoiseRound from "/static/img/fabpsaTurquoiseRound.webp";

interface TitleWithLogoProps
	extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {}

export const TitleWithLogo: FC<TitleWithLogoProps> = ({ children }) => (
	<div className={style.titleWithLogo}>
		<div className={style.title}>{children}</div>

		<Image
			className={clsx(style.image, "lightOnly")}
			src={fabpsa}
			alt="FABPSA"
			width={50}
			height={50}
		/>

		<Image
			className={clsx(style.image, "darkOnly")}
			src={fabpsaTurquoiseRound}
			alt="FABPSA"
			width={50}
			height={50}
		/>
	</div>
);
