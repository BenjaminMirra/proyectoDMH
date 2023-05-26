import styles from "./heroDesktop.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHero from "../../CardHero/cardHero";

const HeroDesktop = ({ cards, texts, images }: any) => {
  return (
    <Grid className={styles.grid}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
        height: "100%",
      }}>
      <Box sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        paddingLeft: "50px",
        paddingBottom: "20px",
        paddingTop: "40px",
      }}>
        <Typography sx={{
          width: "35%",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "48px",
          lineHeight: "50px",
          color: "#FFFFFF",
        }}>
          {texts ? texts[0]?.titles[0] : "hola"}
        </Typography>
        <Typography
          sx={{
            width: "40%",
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "34px",
            lineHeight: "50px",
            color: "#C1FD35",
          }}>
          Tu nueva <span style={{ fontWeight: "bold" }}>billetera virtual</span>
        </Typography>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        flexDirection: "row",
        zIndex: "100",
        marginBottom: "-150px",
        paddingBottom: "30px",
        width: "100%",
      }}>
        <CardHero
          title={cards ? cards[0].titles[0].title : ""}
          description={cards ? cards[0].titles[0].description : ""}
        />
        <CardHero
          title={cards ? cards[0].titles[1].title : ""}
          description={cards ? cards[0].titles[1].description : ""}
        />
      </Box>
      <Box sx={{
        width: "100%",
        bottom: "0",
        height: "148px",
        backgroundColor: "#C1FD35",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px 30px 0px 0px",
      }}></Box>
    </Grid >
  );
};

export default HeroDesktop;
