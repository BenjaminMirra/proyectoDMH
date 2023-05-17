import styles from "./heroMobile.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHero from "../../CardHero/cardHero";

const HeroMobile = ({ cards, texts }: any) => {

  return (
    <Grid className={styles.grid}>
      <Box className={styles.textBox}>
        <Typography className={styles.firstTitleHero}>
          {texts ? texts[0]?.titles[0] : ""}
        </Typography>
        <hr className={styles.barra} />
        <Typography className={styles.secondTitleHero}>
          {texts ? texts[0]?.titles[1] : ""}
        </Typography>
      </Box>
      <Box className={styles.cardsBox}>
        <CardHero
          title={cards ? cards[0].titles[1].title : ""}
          description={cards ? cards[0].titles[1].description : ""}
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

export default HeroMobile;
