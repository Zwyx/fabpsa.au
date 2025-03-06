import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import { Image } from "./Image";
import style from "./TitleWithLogo.module.css";
import fabpsaDarkSmall from "/static/img/fabpsaDarkSmall.webp";
import fabpsaSmall from "/static/img/fabpsaSmall.webp";

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
			src={fabpsaDarkSmall}
			alt="FABPSA"
			width={50}
			height={50}
		/>
	</div>
);
