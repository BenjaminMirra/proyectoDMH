import styles from "./lateralMenu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "@mui/material";



const logout = (router : any) => {
    console.log(router.pathname);
}

const NavTree = () => {
    const router = useRouter();

    let active = (path : String) => {
        return (router.pathname === path ? styles.active : "")
    }
        
    return(
        <Box className = {styles.links}>
            <Link className={active("/inicio")} href="/inicio">Inicio</Link>
            <Link className={active("/actividades")} href="/#">Actividad</Link>
            <Link className={active("/perfil")} href="/perfil">Tu Perfil</Link>
            <Link className={active("/cargardinero")} href="/#">Cargar Dinero</Link>
            <Link className={active("/pagarservicios")} href="/#">Pagar Servicios</Link>
            <Link className={active("/tarjetas")} href="/#">Tarjetas</Link>
            <button onClick={()=>{logout(router)}}>Cerrar sesión</button>
        </Box>
    )
}

export default NavTree;