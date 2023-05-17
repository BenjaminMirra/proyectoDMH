import { useEffect, useState } from "react";

const useDeviceSize = () => {

  const isClient = typeof window === "object"; // Verificar si se está ejecutando en el entorno del navegador

  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);


  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width];

};

export default useDeviceSize;