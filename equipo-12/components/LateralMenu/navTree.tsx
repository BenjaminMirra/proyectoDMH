import styles from "./lateralMenu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import axios from "axios";

const NavTree = (props: any) => {
  const { setLogged } = props;

  const router = useRouter();

  const active = (path: Array<string>) => {
    return (path.includes(router.pathname) ? styles.active : "");
  };

  const logout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios("https://digitalmoney.ctd.academy/api/logout", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("accountId");
    localStorage.removeItem("userId");
    localStorage.removeItem("cardId");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("moneyToCharge");
    setLogged ? setLogged(false) : "";
    router.push("/");
  };


  return (
    <Box className={styles.links}>
      <Link className={active(["/inicio"])} href="/inicio">Inicio</Link>
      <Link className={active(["/actividades"])} href="/inicio">Actividad</Link>
      <Link className={active(["/perfil"])} href="/perfil">Tu Perfil</Link>
      <Link className={active(["/cargar-dinero", "/cargar-dinero/cargar-dinero-transferencia", "/cargar-dinero/cargar-dinero-tarjeta", "/cargar-dinero/ingresar-dinero", "/cargar-dinero/confirmar-info", "/cargar-dinero/exitosa-carga"])} href="/cargar-dinero">Cargar Dinero</Link>
      <Link className={active(["/pagarservicios"])} href="/inicio">Pagar Servicios</Link>
      <Link className={active(["/listar-tarjetas", "/agregar-tarjeta"])} href="/listar-tarjetas">Tarjetas</Link>
      <Link href="/">
        <button onClick={() => { logout(); }}>Cerrar sesión</button>
      </Link>
    </Box>
  );
};

export default NavTree;