import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const HeaderHome = () => {

  const [userData, setUserData] = useState({
    name: "",
    lastName: ""
  });

  useEffect(() => {
    if (localStorage.getItem("userId") !== null) {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const config = {
        method: "get",
        url: `https://digitalmoney.ctd.academy/api/users/${userId}`,
        headers: {
          "Authorization": `${token}`
        },
        data: ""
      };

      axios.request(config)
        .then((response) => {
          setUserData({
            name: response.data.firstname,
            lastName: response.data.lastname
          });
          console.log(userData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

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
          }}
        >
          {userData.name === "" ?
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
            :
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
                }}>
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: "24px",
                    color: "var( --main-bg-color)",
                  }}>
                  {userData.name.charAt(0)}{userData.lastName.charAt(0)}
                </Typography>
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
              >Hola, {userData.name} {userData.lastName}
              </Typography>
            </>
          }
        </Box>
      </Box>
    </Box >
  );
};

export default HeaderHome;
