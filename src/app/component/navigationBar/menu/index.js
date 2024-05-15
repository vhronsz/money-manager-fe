import { useRouter } from "next/navigation";
import style from "./menu.module.css";

const Menu = (props) => {
    const router = useRouter();
    const { title, base, dest } = props;

    const navigate = () => {
        const pathName = `/${base}/${dest}/`;
        router.push(pathName);
    }

    return (
        <div id={style.menu} onClick={() => { navigate() }}>
            {title}
        </div>
    );
}

export default Menu;