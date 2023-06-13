import useTransferences from "../../hooks/useTransferences";
import Layout from "../../layout/layout";
import { NextPageWithLayout } from "../_app";
import { ReactElement, ReactNode } from "react";

interface PropsType {
    children?: ReactNode;
}

const Actividad: NextPageWithLayout<PropsType> = () => {
    const [transferences] = useTransferences();
    console.log(transferences);
    return(
        <>
        <h2>Mi Actividad</h2>
        </>
    )
}
Actividad.getLayout = function getLayout(page: ReactElement) {
    return <Layout variant="home">{page}</Layout>;
};

export default Actividad;