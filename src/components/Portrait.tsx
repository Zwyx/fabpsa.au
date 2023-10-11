import React, { FC } from "react";
import { Image } from "./Image";
import style from "./Portrait.module.css";

interface PortraitProps {
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
}) => (
	<>
		<h3 className={`${style.title} ${right ? style.right : ""}`}>{title}</h3>

		<div className={`${style.portrait} ${right ? style.right : ""}`}>
			<div className={style.leftDescription}>{description}</div>

			<Image src={image} alt={name} width={100} />

			<div className={style.rightDescription}>{description}</div>
		</div>
	</>
);
