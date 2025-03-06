import { FC } from "react";
import style from "./Video.module.css";

interface VideoProps {
	src: string;
}

export const Video: FC<VideoProps> = ({ src }) => (
	<iframe
		className={style.videoEmbed}
		src={src}
		title="YouTube video player"
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowFullScreen
	></iframe>
);
