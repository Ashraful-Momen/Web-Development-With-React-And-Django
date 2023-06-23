import React from "react";

const LoadComponent = ({ comments }) => {
	// console.log(comments);

	const comment = comments.map((c) => {
		return (
			<div key={c.id} style={{ fontWeight: "40px", fontsize: "40px" }}>
        <hr/>
				<h4>{c.author}</h4>
				<hr />
				<b>{c.comment}</b>
				<p>{c.date}</p>
			</div>
		);
	});

	return (
		<div>
			<div style={{ color: "black", fontSize: "40px", fontWeight: "40px" }}>
				Comment Section
				<hr />
			</div>
			<div style={{ color: "black", textAlign: "left" }}> {comment}</div>
		</div>
	);
};

export default LoadComponent;
