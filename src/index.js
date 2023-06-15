import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
	const name = "Kevin";
	return (
		<>
			<div>
				<h1>This is a hello</h1>
				Hello <strong>{name}!</strong>
			</div>
			<span>Another Element</span>
		</>
	);
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
