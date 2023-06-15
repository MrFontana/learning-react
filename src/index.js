import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function HelloWorld() {
	const name = "Kevin";

	// Javascript equivalent to React
	// return React.createElement("div", null,
	// 	React.createElement("h1",
	// 	null,
	// 	"this is hello"),
	// 	"hello ",
	// 	React.createElement("strong",
	// 	null,
	// 	name)
	// React.createContext(Custom)
	// );
	return (
		<div className="dark">
			<h1 onDoubleClick={() => console.log("hello")}>This is a hello</h1>
			<label htmlFor="email">Emal</label>
			<input id="email" />
			{/* this is a comment*/}
			{
				// this is also a comment
			}
			Hello <strong>{name}!</strong>
		</div>
	);
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
