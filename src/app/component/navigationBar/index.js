import style from "./style.module.css";
import Menu from "./menu";
const NavigationBar = (props) => {
    return (
        <>
            <div className={style.container}>
                Navigation
                <Menu text={""} link={""}/>
            </div>
        </>
    );
}


export default NavigationBar;