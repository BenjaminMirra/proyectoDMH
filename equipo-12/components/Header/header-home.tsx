import Image from "next/image";
import imageLogo from "../../utils/images/imageLogo.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Box } from "@mui/material";
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
        >:
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
            <p style={{ color: "white" }}>{userData.name} {userData.lastName}</p>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderHome;
