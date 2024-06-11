import style from "./style.module.css";

const Notification = (props)=>{
    const {type, message} = props;

    return(
        <div className={"bg-[theme(colors.danger)]"} id={style.container}>
            Notif nih
        </div>
    );
}

export default Notification;