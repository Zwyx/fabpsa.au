import clsx from "clsx";
import { HTMLAttributes } from "react";
import style from "./Image.module.css";
import { Legend } from "./Legend";

export const Image = ({
	src,
	alt,
	width,
	height,
	withFrame,
	legend: legendProp,
	borderRadius,
	className,
	children,
}: Pick<HTMLAttributes<HTMLDivElement>, "className" | "children"> & {
	src: string;
	alt: string;
	/** Provide `width` and `height` to prevent layout shift */
	width?: number;
	height?: number;
	withFrame?: boolean;
	legend?: string;
	borderRadius?: string;
}) => {
	const legend = legendProp || children;

	return (
		<div
			className={clsx(
				style.imageWrapper,
				legend && style.withLegend,
				className,
			)}
		>
			<div
				className={clsx(style.frame, withFrame && style.visible)}
				style={{
					width: `${width}px`,
					aspectRatio:
						width && height ? `auto ${width} / ${height}` : undefined,
					borderRadius,
				}}
			>
				<img
					className={style.image}
					src={src}
					alt={alt}
					style={{ borderRadius }}
				/>
			</div>

			{legend && <Legend>{legend}</Legend>}
		</div>
	);
};
