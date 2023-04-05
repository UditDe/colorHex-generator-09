import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (eve) => {
		eve.preventDefault();
		try {
			let colors = new Values(color).all(5);
			// console.table(colors); //colors is basically array of object
			setList(colors);
		} catch (err) {
			setError(true);
			console.error(err);
		}
	};
	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(eve) => setColor(eve.target.value)}
						placeholder="Type the hex"
						className={`${error ? "error" : null}`}
					/>
					<button type="submit" className="btn">
						generate
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					console.log(color);
					//list is an array of objects
					//so.. Color is an object that have.... rgb, alpha, weight, type as keys
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
