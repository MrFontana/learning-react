import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Tweet from "./Tweet";

const data = {
	message: "A tweet about something cool",
	gravatar: "5c3dd2d257ff0e14dbd2583485dbd44b",
	author: {
		handle: "NXSKevin",
		name: "Kevin Fontana",
	},
	likes: 17,
	retweets: 1,
	timestamp: "2023-06-15 21:24:37",
};

ReactDOM.render(<Tweet tweet={data} />, document.querySelector("#root"));
