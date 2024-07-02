import style from './style.module.css';

const BasicComponent = (props) => {
	const {width, height, isCenter, spacing, topRow} = props;
	const {component} = props;
	const size = 1;

	const getSpacing = () => {
		let leftAndRightMargin = `${spacing * 5}%`;
		let topOrBottomMargin = topRow ? '5px' : `${spacing * 2}%`;
		return `${topOrBottomMargin} ${leftAndRightMargin} ${topOrBottomMargin} ${leftAndRightMargin}`;
	}
	const getComponent = () => {
		return component ? component : <div>Container</div>
	}

	const getWidth = () => {
		return width * 10;
	}

	const getHeight = () => {
		return height * 10;
	}

	return (
		<div id={style.container} style={{
			width: `${getWidth()}%`,
			height: `${getHeight()}%`,
			margin: `${getSpacing()}`,
		}}>
			{getComponent()}
		</div>
	);
}

export default BasicComponent;