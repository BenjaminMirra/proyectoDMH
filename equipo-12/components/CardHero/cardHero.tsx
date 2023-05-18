import styles from "./cardHero.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
interface PropsType {
  title: string;
  description: string;
}
const CardHero = ({ title, description }: PropsType) => {
  return (
    <Card className={styles.cardHero}>
      <CardContent className={styles.cardHeroContent}>
        <Typography gutterBottom component="div" className={styles.title}>
          {title}
        </Typography>
        <hr className={styles.hr} />
        <Typography className={styles.description}>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardHero;
