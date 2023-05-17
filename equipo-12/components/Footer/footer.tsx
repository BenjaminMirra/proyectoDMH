import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      paddingLeft: "20px",
      height: "64px",
      backgroundColor: "#3A3A3A"
    }}>
      <Typography variant="subtitle1" sx={{ color: "#C1FD35" }}>
        © 2022 Digital Money House
      </Typography>
    </Box >
  );
};

export default Footer;