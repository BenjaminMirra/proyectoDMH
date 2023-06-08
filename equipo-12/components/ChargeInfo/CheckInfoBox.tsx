import { Box, Button, Typography } from "@mui/material";
import editIconChargeMoney from "../../utils/icons/editIconChargeMoney.png";
import Image from "next/image";

const CheckInfoBox = () => {
  return (
    <Box sx={{
      backgroundColor: "grey",
      width: "100%",
      marginLeft: "79px",
      marginRight: "79px",
      background: "#201F22",
      borderRadius: "8px",
      paddingLeft: "64px",
      paddingTop: "40px",
    }}>
      <Box>
        <Typography
          sx={{
            color: "#C1FD35"
          }}
          variant="h2">
          Revisa que está todo bien
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "20px", paddingBottom: "10px" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center"
        }}>
          <Typography sx={{ color: "white", paddingBottom: "10px" }} variant="subtitle2">
            Vas a transferir
          </Typography>
          <Image
            src={editIconChargeMoney}
            width={30}
            height={30}
            style={{ marginBottom: "10px" }}
            alt="Editar Monto"
          />
        </Box>
        <Typography sx={{ color: "white" }} variant="subtitle2">
          $3.000
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Typography sx={{ color: "white", paddingBottom: "10px" }} variant="subtitle2">
          Para
        </Typography>
        <Typography sx={{ color: "white" }}
          variant="h2">
          Cuenta Propia
        </Typography>
      </Box>
      <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Typography sx={{ color: "white", paddingBottom: "10px" }}>
          Brubank
        </Typography>
        <Typography sx={{ color: "white" }} variant="subtitle2">
          CVU: 0000002100075990000000
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "45px",
        paddingBottom: "45px",
        marginTop: "-40px",
      }}>
        <Button variant="primary" color="secondary" size="large">
          <Typography variant="button">
            Continuar
          </Typography>
        </Button>
      </Box>
    </Box >
  );
};

export default CheckInfoBox;