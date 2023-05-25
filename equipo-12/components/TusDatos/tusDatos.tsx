import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InfoDato from "./infoDato";
import { useEffect } from "react";

const TusDatos = ({ userInfo }: any) => {

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
    }
  }, [userInfo]);

  return (
    <>
      {
        userInfo ?
          <>
            < Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "80px",
              paddingRight: "80px",
              width: "100%",
            }
            }>
              <Card sx={{
                minWidth: "100%",
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                paddingBottom: "2px"
              }}>
                <CardContent>
                  <Typography sx={{
                    paddingBottom: "18px"
                  }} variant="h4">
                    Tus Datos
                  </Typography>
                  <InfoDato input="Email" data={userInfo?.email} change={false} />
                  <InfoDato input="Nombre y Apellido" data={`${userInfo?.firstname} ${userInfo?.lastname}`} change={true} />
                  <InfoDato input="CUIT" data={`20-${userInfo?.dni}-5`} change={true} />
                  <InfoDato input="Teléfono" data={userInfo?.phone} change={true} />
                  <InfoDato input="Contraseña" data="******" change={true} />
                </CardContent>
              </Card>
            </Box >
          </>
          :
          ""
      }
    </>
  );

};

export default TusDatos;
