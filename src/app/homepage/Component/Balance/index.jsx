import BasicContainer from "@/app/Component/BasicContainer";
import style from "./style.module.css";

const Balance = (props) => {
	const {balance = '1.000.00'} = props;
	const {currency = 'IDR'} = props;
	const Component = () => {
		return (
			<div id={style.balanceContainer}>
				Your Balance
				<br/>
				{currency} {balance}
			</div>
		);
	}

	return (
		<BasicContainer width={7} height={1.5} spacing={3} topRow={true} Component={Component}/>
	);
}

export default Balance;