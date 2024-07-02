'use client';
import {useEffect, useState} from "react";
import BasicContainer from "../Component/BasicContainer";
import style from "./style.module.css";

const Homepage = () => {
	useEffect(() => {
		//Load user config or default
	}, []);

	return (
		<div className={"flex"} id={style.container}>
			<BasicContainer width={7} height={1.5} spacing={3} topRow={true}/>
		</div>
	);
}

export default Homepage;