'use client';
import {useEffect, useState} from "react";
import style from "./style.module.css";

import Balance from "@/app/homepage/Component/Balance";

const Homepage = () => {
	useEffect(() => {
		//Load user config or default
	}, []);

	return (
		<div className={"flex"} id={style.container}>
			<Balance/>
		</div>
	);
}

export default Homepage;