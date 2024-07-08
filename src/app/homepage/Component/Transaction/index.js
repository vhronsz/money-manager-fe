import BasicContainer from "@/app/Component/BasicContainer";

const Transaction = (props) => {
	const {type = "expense", total = 0} = props.data;
	const Component = () => {
		return (
			<div>
				Transaction
			</div>
		);
	}

	return (
		<BasicContainer width={3.5} height={3.5} spacing={1} Component={Component}/>
	);
}

export default Transaction;
