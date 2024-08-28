import React from "react";
// import {} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				// icon={}
				title="Experiência"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://github.com/zilla3k.png"
								alt=""
								className="work-image"
							/>
							<div className="work-title">Freelancer</div>
							<div className="work-subtitle">
								Desenvolvedor Web
							</div>
{/* 							<div className="work-duration">2022 - Present</div> */}
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
