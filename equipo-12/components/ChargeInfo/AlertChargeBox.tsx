import { Box, Typography } from "@mui/material";
import checkCharge from "../../utils/icons/checkCharge.png";
import Image from "next/image";

const AlertChargeBox = () => {
  return (
    <Box sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#C1FD35",
      borderRadius: "8px",
      flexDirection: "column",
      padding: "20px",
      height: "150px",
    }}>
      <Image
        src={checkCharge}
        width={62}
        height={62}
        style={{ marginBottom: "10px" }}
        alt="Editar Monto"
      />
      <Typography sx={{
        fontSize: "20pt",
        fontWeight: "700",
      }}>
        Ya cargamos el dinero en tu cuenta
      </Typography>
    </Box>
  );
};

export default AlertChargeBox;