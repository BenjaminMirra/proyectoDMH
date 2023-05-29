import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box, Fade, Menu, MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useUser from "../../hooks/useUser";
import { IUser } from "../../types";


const HeaderHome = () => {
  const [logged, setLogged] = useState(true);
  const [userData, setUserData] = useState<IUser>();

  const [userInfo] = useUser();

  useEffect(() => {
    if (userInfo) {
      setUserData(userInfo);
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [userInfo]);

  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async() => {
    const token = localStorage.getItem("token");
    try {
      await axios("https://digitalmoney.ctd.academy/api/logout", {
        headers: {
          Authorization: token,
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (error){
      console.log(error);
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
                {userData?.firstname.charAt(0)}
                {userData?.lastname.charAt(0)}
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
            Hola, {userData?.firstname} {userData?.lastname}
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
    <Box
      sx={{
        backgroundColor: "var(--main-bg-color)",
      }}
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
    </Box>
  );
};

export default HeaderHome;
