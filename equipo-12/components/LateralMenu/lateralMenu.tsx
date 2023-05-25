import styles from "./lateralMenu.module.css";
import Link from "next/link"
import Box from "@mui/material/Box/Box";

const LateralMenu = () => {
    return(
        <Box className={styles.container}>
            <Link>Inicio</Link>
            <Link>Actividad</Link>
            <Link>Tu Perfil</Link>
            <Link>Cargar Dinero</Link>
            <Link>Pagar Servicios</Link>
            <Link>Tarjetas</Link>
            <Link>Cerrar sesión</Link>
        </Box>
    )
}

export default LateralMenu;