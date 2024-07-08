'use client';
import {useEffect, useState} from "react";
import style from "./style.module.css";

import Balance from "@/app/homepage/Component/Balance";
import Transaction from "@/app/homepage/Component/Transaction";

const Homepage = () => {
	useEffect(() => {
		//Load user config or default
	}, []);

	const balanceData = {
		balance: '1.000.000,00',
		currency: "IDR"
	}

	const transactionData = {
		type: '',
		total: ''
	}
	return (
		<div className={"flex flex-col"} id={style.container}>
			<Balance data={balanceData}/>
			<div>
				<Transaction data={transactionData}/>
				<Transaction data={transactionData}/>
			</div>
		</div>
	);
}

export default Homepage