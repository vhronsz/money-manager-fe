import style from "./style.module.css";
import {MdClose} from "react-icons/md";
import COLORS from "../../colorsConst";

const Notification = (props) => {
	const {type = "normal", title = "Title", body = "Message Body", show, setShow} = props;
    
	const pickTheme = () => {
		if (type === "danger")
			return COLORS.danger;
		return COLORS.onyx;
	}

	const hideNotification = () => {
		setShow(false);
	}

	const isHidden = () => {
		return !show;
	}

	return (
		<div id={style.container} style={{backgroundColor: pickTheme()}} hidden={isHidden()}>
			<div id={style.title} onClick={() => hideNotification()}>
				<div id={style.titleText}>{title}</div>
				<MdClose id={style.titleIcon}/>
			</div>
			<div id={style.messageBody}>{body}</div>
		</div>
	);
}

export default Notification;