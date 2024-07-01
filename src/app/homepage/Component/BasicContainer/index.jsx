import style from './style.module.css';

const BasicComponent = (props) => {
	const {width, height} = props;
	const getWidth = () => {
		return width * 10;
	}

	const getHeight = () => {
		return height * 10;
	}
	return (
		<div id={style.container} style={{width: `${getWidth()}%`, height: `${getHeight()}%`}}>
			asd
		</div>
	);
}

export default BasicComponent;