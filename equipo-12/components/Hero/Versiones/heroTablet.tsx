import styles from "./heroTablet.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHero from "../../CardHero/cardHero";
import { useEffect } from "react";

const HeroTablet = ({ cards, texts }: any) => {

  useEffect(() => {
    console.log(texts);
  }, [texts]);


  return (
    <Grid className={styles.grid}>
      <Box className={styles.textBox}>
        <Typography className={styles.firstTitleHero}>
          {texts ? texts[0]?.titles[0] : ""}
        </Typography>
        <Typography className={styles.secondTitleHero}>
          Tu nueva <span style={{ fontWeight: "bold" }}>billetera virtual</span>
        </Typography>
      </Box>
      <Box className={styles.cardsBox}>
        <CardHero
          title={cards ? cards[0].titles[0].title : ""}
          description={cards ? cards[0].titles[0].description : ""}
        />
        <CardHero
          title={cards ? cards[0].titles[1].title : ""}
          description={cards ? cards[0].titles[1].description : ""}
        />
      </Box>
      <Box className={styles.yellowBox}>
      </Box>
    </Grid>
  );
};

export default HeroTablet;
