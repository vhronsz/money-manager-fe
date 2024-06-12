import style from "./style.module.css";
import { MdClose } from "react-icons/md";

const Notification = (props)=>{
    const {type = "normal", title = "Title", body = "Message Body", show = false} = props;

    let color = type === "normal" ? 'colors.onyx' : 'colors.danger';

    const hideNotification = ()=>{
        console.log("Gello");
    }
    return(
        <div className={`bg-[theme(colors.onyx)]`} id={style.container}>
            <div id={style.title}>
                <div id={style.titleText}>{title}</div>
                <MdClose onClick={()=>hideNotification()} id={style.titleIcon}/>
            </div>
            <div id={style.messageBody}>{body}</div>
        </div>
    );
}

export default Notification;