import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CheckInfoBox = ({ money, info, handleChargeMoney}: any) => {
  const router = useRouter();
  const [text, setText] = useState("");

  useEffect(() => {
    if (router.pathname === "/pago-realizado") {
      return setText("Tarjeta");
    } else {
      return setText("Brubank");
    }
  }, [router.pathname, text]);


  const handleClick = () => {
    handleChargeMoney();
  };

  const currentDate = new Date();

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const monthName = monthNames[currentDate.getUTCMonth()];

  const year = currentDate.getUTCFullYear();
  const day = currentDate.getUTCDate().toString().padStart(2, "0");
  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");

  const formattedDate = `${day} de ${monthName} ${year} a ${hours}:${minutes} hs.`;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "10px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "grey",
          width: "100%",
          background: "#201F22",
          borderRadius: "8px",
          paddingLeft: "64px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Box>
          <Typography sx={{ color: "white" }} variant="subtitle2">
            {formattedDate}
          </Typography>
          <Typography sx={{ color: "#C1FD35" }} variant="subtitle2">
            $ {money}
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Typography sx={{ color: "white" }} variant="subtitle2">
            Para
          </Typography>
          <Typography sx={{ color: "#C1FD35" }} variant="h2">
            Cuenta Propia
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Typography sx={{ color: "white" }}>{text}</Typography>
          {router.pathname === "/pago-realizado" ? (
            <Typography sx={{ color: "white" }} variant="subtitle2">
              {info?.tarjeta?.nombre} {info?.tarjeta?.numero}
            </Typography>
          ) : (
            <Typography sx={{ color: "white" }} variant="subtitle2">
              CVU: {info?.cvu}
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          gap: "20px",
          paddingTop: "10px",
          "@media only screen and (max-width: 1098px)": {
            justifyContent: "center",
          },
          "@media only screen and (max-width: 768px)": {
            flexDirection: "column-reverse",
            paddingBottom: "30px",
          },
        }}
      >
        <Link href="/inicio">
          <Button
            variant="primary"
            sx={{
              textTransform: "none",
              backgroundColor: "#CECECE",
              borderColor: "#CECECE",
              color: "black",
              width: "233px",
              height: "65px",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#a5a5a5",
                borderColor: "#a5a5a5",
              },
              "@media only screen and (max-width: 1098px)": {
                width: "243px",
              },
              "@media only screen and (max-width: 768px)": {
                width: "100%",
              },
            }}
            onClick={handleClick}
          >
            Ir al Inicio
          </Button>
        </Link>
        <Button
          variant="primary"
          color="secondary"
          sx={{
            width: "233px",
            height: "65px",
            fontSize: "16px",
            "@media only screen and (max-width: 1098px)": {
              width: "243px",
            },
            "@media only screen and (max-width: 768px)": {
              width: "100%",
            },
          }}
        >
          Descargar comprobante
        </Button>
      </Box>
    </Box>
  );
};

export default CheckInfoBox;
