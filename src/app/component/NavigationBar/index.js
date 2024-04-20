import style from './navigation.module.css';

const NavigationBar = () => {
    const HOMEPAGE = "/homepage";
    const a = `${HOMEPAGE}/`;
    return (
        <nav id={style.navigationMenu}>
            <div className="mt-[10px]"id={style.line}></div>
            <div className="w-full h-1/4 text-[theme(colors.light)] flex flex-column justify-center items-center">
                &Logo&
            </div>
            <div id={style.line}></div>
            <div id={style.menuContainer}>
                <a className={style.menu} href={`${HOMEPAGE}/`}>Home</a>
                <a className={style.menu} href={`${HOMEPAGE}/planning`}>Planning</a>
                <a className={style.menu} href={`${HOMEPAGE}/expense`}>Expense</a>
                <a className={style.menu} href={`${HOMEPAGE}/fund`}>Fund</a>
                <a className={style.menu} href={`${HOMEPAGE}/config`}>Config</a>
            </div>
        </nav>
    );
}

export default NavigationBar;
