import { Box, Typography } from "@mui/material";

const CheckInfoBox = ({ moneyToCharge, accountInfo }: any) => {

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
    "Diciembre"
  ];

  const monthName = monthNames[currentDate.getUTCMonth()];

  const year = currentDate.getUTCFullYear();
  const day = currentDate.getUTCDate().toString().padStart(2, "0");
  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");

  const formattedDate = `${day} de ${monthName} ${year} a ${hours}:${minutes} hs.`;

  return (
    <Box sx={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "10px"
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
            {formattedDate}
          </Typography>
          <Typography sx={{ color: "#C1FD35" }} variant="subtitle2">
            $ {moneyToCharge}
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
            CVU: {accountInfo?.cvu}
          </Typography>
        </Box>
      </Box >
    </Box>
  );
};

export default CheckInfoBox;