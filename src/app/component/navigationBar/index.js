import style from "./navigationBar.module.css";
import Menu from "./menu";

const NavigationBar = (props) => {
    const Logout = () => {
        const logout = () => {
            console.log("Logout");
        }

        return (
            <div className="h-full bg-[theme(colors.silver)]" onClick={() => { logout() }}>
                Logout
            </div>
        );
    }

    return (
        <div id={style.container}>
            <div className={style.section} id={style.topSection}>
                Money Manager
            </div>

            <div className={style.section} id={style.middleSection}>
                <Menu title={"Transactions"} base={"homepage"} dest={"transaction"} />
                <Menu title={"Funds"} base={"homepage"} dest={"fund"} />
                <Menu title={"Expenses"} base={"homepage"} dest={"expense"} />
            </div>

            <div className={style.section} id={style.bottomSection}>
                <Logout />
            </div>
        </div>
    );
}

export default NavigationBar;