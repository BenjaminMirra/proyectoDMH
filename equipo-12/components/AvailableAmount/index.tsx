import { UserContext } from "../../context/createContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Card, Box, Typography, IconButton } from "@mui/material";
import Link from "next/link";
import { useState, useContext } from "react";

const AvailableAmount = () => {
  const [isVisibility, setIsVisibility] = useState<boolean>(true);
  const handleVisibility = () => {
    setIsVisibility(!isVisibility);
  };

  const data = useContext(UserContext);

  const { available_amount } = data.account;
  return (
    <Card variant="outlined" sx={{ width: "100%","@media (max-width: 768px)": {padding: "20px"} }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end", gap: "10px", flexWrap:"wrap" }}>
        <Link style={{ color: "#EEEAEA" }} href="/inicio">
          <Typography variant="subtitle1" sx={{ "&:hover": { color: "#C1FD35", } }}>Ver Tarjetas</Typography>
        </Link>
        <Link style={{ color: "#EEEAEA" }} href="/inicio">
          <Typography variant="subtitle1" sx={{ "&:hover": { color: "#C1FD35", } }}>Ver CVU</Typography>
        </Link>
      </Box>
      <Typography variant="h4" sx={{ paddingLeft: "10px" }}>Dinero Disponible</Typography>
      <Box sx={{ display: "flex", flexWrap:"wrap",alignItems: "center", gap: "30px" }}>
        <Typography variant="h1" sx={{ border: "2px solid #C1FD35", borderRadius: "100px", width: "auto", padding: "10px", wordSpacing:"10px",display: "flex", gap: "20px" }}>
          $
          {
            isVisibility
              ? available_amount == "0" ? "0,00" : available_amount
              : "***"
          } ARS
        </Typography>
        {
          isVisibility
            ? <IconButton color="secondary" onClick={handleVisibility}> <VisibilityIcon color="secondary" fontSize="large" /> </IconButton >
            : <IconButton color="secondary" onClick={handleVisibility}> <VisibilityOffIcon color="secondary" fontSize="large" /></IconButton >
        }
      </Box>

    </Card>
  );
};

export default AvailableAmount;
