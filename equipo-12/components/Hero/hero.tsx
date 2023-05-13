import styles from "./hero.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import CardHero from '../CardHero/cardHero';
import Typography from "@mui/material/Typography";
import CardHero from "../CardHero/cardHero";

const Hero = () => {
  return (
    <Grid className={styles.grid} >
      <Box className={styles.textBox}>
        <Typography className={styles.firstTitleHero}>
          De ahora en
        </Typography>
        <Typography className={styles.firstTitleHero}>
          adelante, hacés
        </Typography>
        <Typography className={styles.firstTitleHero}>
          más con tu dinero
        </Typography>
        <Typography className={styles.secondTitleHero}>
          Tu nueva <span style={{ fontWeight: "bolder" }}>billetera</span> virtual
        </Typography>
      </Box>
      <Box className={styles.cardsBox}>
        <CardHero title={"Transferí dinero"} description={"Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual "} />
        <CardHero title={"Pago de servicios"} description={"Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel"} />
      </Box>

      <Box className={styles.yellowBox}>
      </Box>
    </Grid>
  );
}

  ;

export default Hero;