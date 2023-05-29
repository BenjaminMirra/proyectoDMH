import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InfoDato from "./infoDato";
import { IUser } from "../../types";
interface Props {
  userInfo: IUser;
}

const TusDatos = ({ userInfo }: Props) => {
  return (
    <>
      {userInfo ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              "@media (max-width: 768px)": {
                paddingRight: "30px",
                paddingLeft: "30px",
              },
            }}
          >
            <Card
              sx={{
                minWidth: "100%",
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                paddingBottom: "2px",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    paddingBottom: "18px",
                  }}
                  variant="h4"
                >
                  Tus Datos
                </Typography>
                <InfoDato
                  dataKey={Object.keys(userInfo)[4]}
                  input="Email"
                  data={userInfo?.email}
                  change={true}
                />
                <InfoDato
                  dataKey={
                    Object.keys(userInfo)[1] + "," + Object.keys(userInfo)[2]
                  }
                  input="Nombre y Apellido"
                  data={`${userInfo?.firstname} ${userInfo?.lastname}`}
                  change={true}
                />
                <InfoDato
                  dataKey={Object.keys(userInfo)[3]}
                  input="CUIT"
                  data={`20-${userInfo?.dni}-5`}
                  change={false}
                />
                <InfoDato
                  dataKey={Object.keys(userInfo)[5]}
                  input="Teléfono"
                  data={userInfo?.phone}
                  change={true}
                />
                <InfoDato
                  dataKey={"password"}
                  input="Contraseña"
                  data="********"
                  change={true}
                />
              </CardContent>
            </Card>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TusDatos;