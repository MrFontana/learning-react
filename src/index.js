import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
	return (
		<div className="tweet">
			<Avatar />
			<div className="content">
				<Author />
				<Time />
				<Message />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton />
					<LikeButton />
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	);
}

const ReplyButton = () => <i className="fa fa-reply reply-button"></i>;
const RetweetButton = () => <i className="fa fa-retweet retweet-button"></i>;
const LikeButton = () => <i className="fa fa-heart like-button"></i>;
const MoreOptionsButton = () => <i className="fa fa-ellipsis-h more-options-button"></i>;

function Message() {
	return <div className="message">Something Great.</div>;
}

function Time() {
	return <span className="time">3h ago</span>;
}

function Author() {
	return (
		<span className="author">
			<span className="name">Kevin Fontana</span>
			<span className="handle">@NXSKevin</span>
		</span>
	);
}

function Avatar() {
	return <img alt="avatar" className="avatar" src="https://www.gravatar.com/avatar/nothing" />;
}
ReactDOM.render(<Tweet />, document.querySelector("#root"));
