import style from "./Video.module.css";

export const Video = ({ src }: { src: string }) => (
	<iframe
		className={style.videoEmbed}
		src={src}
		title="YouTube video player"
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowFullScreen
	></iframe>
);
