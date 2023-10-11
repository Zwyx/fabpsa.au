import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";
import { Image } from "./Image";
import style from "./Portrait.module.css";

interface PortraitProps
	extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {
	title: string;
	image: string;
	name: string;
	description: string;
	right?: string;
}

export const Portrait: FC<PortraitProps> = ({
	title,
	image,
	name,
	description,
	right,
	children,
}) => (
	<>
		<h3 className={clsx(style.title, right ? style.right : "")}>{title}</h3>

		<div className={clsx(style.portrait, right ? style.right : "")}>
			<div className={style.leftDescription}>{children}</div>

			<Image src={image} alt={name} width={100} />

			<div className={style.rightDescription}>{children}</div>
		</div>
	</>
);
