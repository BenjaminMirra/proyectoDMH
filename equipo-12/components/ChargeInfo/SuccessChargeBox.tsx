import { Box, Button, Typography } from "@mui/material";
import editIconChargeMoney from "../../utils/icons/editIconChargeMoney.png";
import Image from "next/image";

const CheckInfoBox = () => {
  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <Box sx={{
        backgroundColor: "grey",
        width: "100%",
        background: "#201F22",
        borderRadius: "8px",
        paddingLeft: "64px",
        paddingTop: "40px",
        paddingBottom: "40px"
      }}>
        <Box>
          <Typography sx={{ color: "white" }} variant="subtitle2">
            17 de Agosto 2022 a 16:34 hs.
          </Typography>
          <Typography sx={{ color: "#C1FD35" }} variant="subtitle2">
            $3.000
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Typography sx={{ color: "white" }} variant="subtitle2">
            Para
          </Typography>
          <Typography sx={{ color: "#C1FD35" }}
            variant="h2">
            Cuenta Propia
          </Typography>
        </Box>
        <Box sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Typography sx={{ color: "white" }}>
            Brubank
          </Typography>
          <Typography sx={{ color: "white" }} variant="subtitle2">
            CVU: 0000002100075990000000
          </Typography>
        </Box>
      </Box >
    </Box>
  );
};

export default CheckInfoBox;