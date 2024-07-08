import BasicContainer from "@/app/Component/BasicContainer";
import style from "./style.module.css";

const Balance = (props) => {

	let {balance = '1000'} = props.data;
	const {currency = 'IDR'} = props.data;

	const Component = () => {
		return (
			<div id={style.balanceContainer}>

				<div className={style.content}>
					Your Balance
				</div>

				<div className={style.content}>
					{currency} {balance}
				</div>

			</div>
		);
	}

	return (
		<BasicContainer width={7} height={1.5} spacing={3} topRow={true} Component={Component}/>
	);
}

export default Balance;