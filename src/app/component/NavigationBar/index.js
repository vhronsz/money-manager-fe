import style from './navigation.module.css';

const NavigationBar = () => {
    return (
        <nav id={style.navigationMenu}>
            <div className="mt-[10px]"id={style.line}></div>
            <div className="w-full h-1/4 text-[theme(colors.light)] flex flex-column justify-center items-center">
                &Logo&
            </div>
            <div id={style.line}></div>
            <div id={style.menuContainer}>
                <a className={style.menu} href="/homepage">Home</a>
                <a className={style.menu} href="/manage">Manage</a>
            </div>
        </nav>
    );
}

export default NavigationBar;
