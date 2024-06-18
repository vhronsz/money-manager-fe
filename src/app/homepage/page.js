'use client';
import {useEffect, useState} from "react";
import BasicContainer from "./Component/BasicContainer";

const Homepage = () => {
	useEffect(() => {
		//Load user config or default
	}, []);

	return (
		<div className={"flex"}>
			<BasicContainer/>
			<BasicContainer/>
		</div>
	);
}

export default Homepage;