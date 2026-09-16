import { PropsWithChildren } from "react";
import style from "./Legend.module.css";

export const Legend = ({ children }: PropsWithChildren) => (
	<div className={style.legend}>{children}</div>
);
