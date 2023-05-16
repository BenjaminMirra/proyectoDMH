import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Head from "next/head";
import { Button, Grid, TextField } from "@mui/material";
import styles from "../../../styles/login.module.css";
import { NextPageWithLayout } from "../../_app";
import LayoutLogin from "../../../layout/layout-login";
import { ReactElement } from "react";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Se requiere de un correo electronico")
      .email("Se solicita un correo electronico valido"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Username: NextPageWithLayout<any> = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) =>
    router.push({
      pathname: "/iniciar-sesion/paso-2",
      query: { email: data.email },
    });

  const onClick = () => {
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Digital Money House</title>
        <meta name="Iniciar Sesión DMH" content="Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{
        width: "100%"
      }}>
        <Grid className={styles.gridGeneralContainer}>
          <h2>¡Hola! Ingresá tu e-mail</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="outlined-basic" variant="outlined" className={styles.inputForm} {...register("email")} />
            <p className={styles.pError}> {errors.email?.message}</p>
            <Button variant="secondary" type="submit">Continuar</Button>
          </form>
          <Button variant="tertiary" onClick={() => onClick()}>Crear cuenta</Button>

        </Grid>
      </main>
    </>
  );
};

Username.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};

export default Username;