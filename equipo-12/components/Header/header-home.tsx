import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box, Fade, Menu, MenuItem, Typography,IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useUserData } from "../../context/createContext";
import useUser from "../../hooks/useUser";

const HeaderHome = (props: any) => {
  const { setVisibility } = props;
  const [logged, setLogged] = useState(false);
  const { userDataInitial } = useUserData();
  const [userInfo] = useUser();

  useEffect(() => {
    if (userDataInitial.firstname !== "" && localStorage.getItem("token") || userInfo.firstname !== "" && router.pathname !== "/") {
      setLogged(true);
    } else {
      setLogged(false);
    }

  }, [userDataInitial, userInfo]);

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
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
    setAnchorEl(null);
    localStorage.removeItem("token");
    localStorage.removeItem("accountId");
    localStorage.removeItem("userId");
    router.push("/");
    setLogged(false);
  };

  const handleIsAuthMenu = () => {
    if (logged) {
      ////const { nombre, apellido } = JSON.parse(localStorage.getItem('user'));
      return (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#C1FD35",
              color: "var( --main-bg-color)",
              padding: "5px",
              borderRadius: "10px",
            }}
          >
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "24px",
                  color: "var( --main-bg-color)",
                }}
              >
                {
                userDataInitial?.firstname != ""  ?
                  `
                ${userDataInitial?.firstname.charAt(0)}
                ${userDataInitial?.lastname.charAt(0)}`
                  :
                  `
                ${userInfo?.firstname.charAt(0)}
                ${userInfo?.lastname.charAt(0)}
                `
                }
              </Typography>
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              TransitionComponent={Fade}
              onClick={handleClose}
              sx={{
                margin: "5px",
              }}
            >
              <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
            </Menu>
          </Box>
          {router.pathname !== "/" &&
            <IconButton 
            onClick={() => {setVisibility(true)}}
              sx={{
                "@media (min-width: 768px)": {
                  display: "none !important",
                },
                "@media (max-width: 767px)": {
                  display: "inline !important",
                },
                padding: "0px",
              }}
            >
              
            <MenuIcon color="secondary" fontSize="large"/> </IconButton>}
          <Typography
            variant="subtitle2"
            sx={{
              "@media (max-width: 768px)": {
                display: "none",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "16px",
              color: "var(--main-text-color)",
            }}
          >
            {userDataInitial?.firstname != "" ?
              `Hola, ${userDataInitial?.firstname} ${userDataInitial?.lastname}`
              :
              `Hola, ${userInfo?.firstname} ${userInfo?.lastname}`
            }
          </Typography>
        </>
      );
    } else {
      return (
        <>
          <Link href="/iniciar-sesion/paso-1">
            <Button variant="primary" size="small">
              Ingresar
            </Button>
          </Link>
          <Link href="/registro">
            <Button variant="primary" color="secondary" size="small">
              Crear Cuenta
            </Button>
          </Link>
        </>
      );
    }
  };

  return (

    <>
      < Box
        sx={{
          backgroundColor: "var(--main-bg-color)",
          zIndex: "2",
          position: "sticky",
          top: "0px",
          width: "100%",
        }
        }
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
          }}
        >
          <Box>
            <Link
              href={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={imageLogo} alt="logo" />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              color: "white",
            }}
          >
            {handleIsAuthMenu()}
          </Box>
        </Box>
      </Box >

    </>
  );
};

export default HeaderHome;