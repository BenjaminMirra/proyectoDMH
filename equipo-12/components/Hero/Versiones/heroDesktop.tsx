import styles from "./heroDesktop.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardHero from "../../CardHero/cardHero";
import { useEffect } from "react";

const HeroDesktop = ({ cards, texts }: any) => {

  useEffect(() => {
    console.log(texts);
  }, [texts]);

  return (
    <Grid className={styles.grid}>
      <Box className={styles.textBox}>
        <Typography className={styles.firstTitleHero}>
          {/* {texts[0]?.titles[0]?.title} */}
        </Typography>
        <Typography className={styles.secondTitleHero}>
          {/* {texts[0]?.titles[1]?.title} */}
        </Typography>
      </Box>
      <Box className={styles.cardsBox}>
        <CardHero
        // title={cards[0]?.cards[0]?.title}
        // description={cards[0]?.cards[0]?.description}
        />
        <CardHero
        // title={cards[0]?.cards[1]?.title}
        // description={cards[0]?.cards[0]?.description}
        />
      </Box>
      <Box className={styles.yellowBox}>
      </Box>
    </Grid>
  );
};

export default HeroDesktop;
