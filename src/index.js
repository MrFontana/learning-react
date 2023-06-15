import React from "react";
import ReactDOM from "react-dom";

function Custom() {
	return <span>custom</span>;
}

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
		<div>
			<h1>This is a hello</h1>
			Hello <strong>{name}!</strong>
			<Custom />
		</div>
	);
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
