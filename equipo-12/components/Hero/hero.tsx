import { useState, useEffect } from "react";
import HeroDesktop from "./Versiones/heroDesktop";
import HeroMobile from "./Versiones/heroMobile";
import HeroTablet from "./Versiones/heroTablet";

export const Hero = ({ texts, images, cards }: any) => {

  const [heroDisplayed, setHeroDisplayed] = useState(<HeroDesktop />);
  const [windowWidth, setWindowWidth] = useState(1500);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agrega el listener de redimensionamiento del lado del cliente
    window.addEventListener("resize", handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setHeroDisplayed(<HeroMobile images={images} cards={cards} />);
    } else if (windowWidth < 1025) {
      setHeroDisplayed(<HeroTablet texts={texts} images={images} cards={cards} />);
    } else {
      setHeroDisplayed(<HeroDesktop texts={texts} cards={cards} />);
    }
  }, [windowWidth, texts, images, cards]);
  return (
    <>
      {heroDisplayed}
    </>
    //
  );
};
