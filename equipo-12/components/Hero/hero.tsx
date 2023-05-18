import { useState, useEffect } from "react";
import HeroDesktop from "./Versiones/heroDesktop";
import HeroMobile from "./Versiones/heroMobile";
import HeroTablet from "./Versiones/heroTablet";
import useDeviceSize from "../../hooks/useDeviceSize";

export const Hero = ({ texts, images, cards }: any) => {

  const [heroDisplayed, setHeroDisplayed] = useState(<HeroDesktop />);
  const [width] = useDeviceSize();

  useEffect(() => {
    if (width <= 768) {
      setHeroDisplayed(<HeroMobile cards={cards} />);
    } else if (width < 1025) {
      setHeroDisplayed(<HeroTablet texts={texts} cards={cards} />);
    } else {
      setHeroDisplayed(
        <HeroDesktop texts={texts} cards={cards} images={images} />
      );
    }
  }, [width, texts, images, cards]);
  return (
    <>{heroDisplayed}</>
    //
  );
};
