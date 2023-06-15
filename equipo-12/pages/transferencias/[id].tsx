import { ReactElement } from "react";
import { Box, Button, Card, Divider, Link, Typography } from "@mui/material";
import Head from "next/head";
import { transferences } from "../../data";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Layout from "../../layout/layout";

const Transference = () => {
  const transfercence = transferences[0];

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="description" content="Digital Money House" />
      </Head>
      <Box
        sx={{
          width: "276px",
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
          "@media (max-width: 1301px)": {
            width: "221px"
          },
        }}></Box>
      <Box sx={{ display: "flex", width: "100%", padding:"50px",paddingLeft:"100px",backgroundColor: "#EEEAEA", justifyContent:"center", alignItems:"center", "@media (max-width: 768px)": { padding: "10px", paddingTop: "50px" } }}>
        <Card variant="outlined" sx={{ width: "100%", "@media (max-width: 768px)": { padding: "20px" } }}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap", borderBottom: "2px solid #EEEAEA", paddingBottom: "15px" }}>
            <Typography variant="h2" sx={{display:"flex", alignItems:"center",gap:"5px", color: "#C1FD35" }}>
              <CheckCircleOutlineIcon fontSize="large"></CheckCircleOutlineIcon>
                Aprobada
            </Typography>
            <Typography variant="subtitle1" sx={{ "&:hover": { color: "#C1FD35", } }}>
              {transfercence.dated}
            </Typography>
          </Box>
          <Divider variant="middle"></Divider>
          <Box sx={{ display: "flex", flexDirection:"column", gap:"10px"}}>
            <Typography variant="h4" >Transferencia de dinero</Typography>
            <Typography variant="h2" sx={{ color: "#C1FD35" }}>
                $1.266,57
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection:"column", gap:"10px"}}>
            <Typography variant="subtitle1" >Le transferiste a</Typography>
            <Typography variant="h1" sx={{ color: "#C1FD35" }}>
                Benjamin Mirra
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection:"column", gap:"10px"}}>
            <Typography variant="subtitle1" >Número de operación</Typography>
            <Typography variant="subtitle1" sx={{ color: "#C1FD35" }}>
              27903047281
            </Typography>
          </Box>
          <Box sx={{width:"100%", display:"flex", justifyContent:"flex-end", gap:"20px", flexWrap:"wrap"}}>
            <Link href="/inicio" sx={{textDecoration:"none", "@media (max-width:1200px)": {width:"100%"}}} >
              <Button variant="secondary" size="large" sx={{width:"360px", "@media (max-width:1200px)": {width:"100%", maxWidth:"100%"}}}>Ir al Inicio</Button>
            </Link>
            <Link href="/transferencias" sx={{ textDecoration:"none", "@media (max-width:1200px)": {width:"100%"} }} >
              <Button variant="primary" color="secondary" size="large" sx={{width:"360px", "@media (max-width:1200px)": {width:"100%", maxWidth:"100%"}}}>Tu actividad</Button>
            </Link>
          </Box>

        </Card>

      </Box>
    </>
  );
};


Transference.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default Transference;
