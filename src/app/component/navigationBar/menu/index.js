import { useRouter } from "next/navigation";

const Menu = (props)=>{
    const router = useRouter();

    const {title, link} = props; 

    const onClick = ()=>{
        router.push(link);
    }
    
    return(
        <div>
            {title}
        </div>
    );
}



export default Menu;