import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setAlert(false);
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [alert]);

	const bgColor = rgb.join(", ");
	// const hex = rgbToHex(...rgb);
	const hexValue = `#${hexColor}`; //this line and its previous line have same perpous

	return (
		<article
			className="color"
			style={{ background: `rgb(${bgColor})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}
		>
			<p
				className="percent-value"
				style={{ color: `${index > 20 ? "white" : "black"}` }}
			>
				{weight}%
			</p>
			<p
				className="percent-value"
				style={{ color: `${index > 20 ? "white" : "black"}` }}
			>
				{hexValue}
			</p>
			<p
				className="alert"
				style={{ color: `${index > 20 ? "white" : "black"}` }}
			>
				{alert ? "Hex Copied" : ""}
			</p>
		</article>
	);
};

export default SingleColor;
