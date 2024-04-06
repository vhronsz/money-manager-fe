import react from "react";
import style from './navigation.module.css';

const NavigationBar = () => {
    return (
        <nav className={style.container}>
            <a className={style.menu}>Home</a>
            <a className={style.menu}>Manage</a>
        </nav>
    );
}

export default NavigationBar;
