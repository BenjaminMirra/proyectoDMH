import Image from "next/image";
import logoDark from "../../utils/images/logoDark.svg";
import { Button, Box } from "@mui/material";
import Link from "next/link";

const HeaderRegister = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#C1FD35",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={logoDark} alt="logo" />
        </Link>
        <Box>
          <Link href="/iniciar-sesion">
            <Button
              sx={{
                backgroundColor: "#3A393E",
                color: "#FFFF",
                height: "40px !important",
                width: "200px !important",
                "&:hover": {
                  backgroundColor: "#201F22",
                  color: "#C1FD35",
                },
              }}
            >
              Iniciar sesion
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderRegister;
