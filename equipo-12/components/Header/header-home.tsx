import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box, Fade, Menu, MenuItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const HeaderHome = () => {
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  useEffect(() => {
    if (localStorage.getItem("userId") !== null) {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const config = {
        method: "get",
        url: `https://digitalmoney.ctd.academy/api/users/${userId}`,
        headers: {
          Authorization: `${token}`,
        },
        data: "",
      };
      console.log(userData);
      axios
        .request(config)
        .then((response) => {
          setLogged(true);
          setUserData({
            name: response.data.firstname,
            lastName: response.data.lastname,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(userData);
  }, []);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    setLogged(false);
  };

  const handleIsAuthMenu = () => {
    if (logged && userData.name != "") {
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
                {userData.name.charAt(0)}
                {userData.lastName.charAt(0)}
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
            Hola, {userData.name} {userData.lastName}
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
          <Link href="/listar-tarjetas">
            <Button variant="primary" color="secondary" size="small">
              Lista Tarjetas
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
