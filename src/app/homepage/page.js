'use client';
import {useEffect, useState} from "react";
import BasicContainer from "./Component/BasicContainer";
import style from "./style.module.css";

const Homepage = () => {
	useEffect(() => {
		//Load user config or default
	}, []);

	return (
		<div className={"flex"} id={style.container}>
		</div>
	);
}

export default Homepage;