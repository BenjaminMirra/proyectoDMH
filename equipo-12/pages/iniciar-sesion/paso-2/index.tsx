import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { ReactElement, useState } from "react";
import Head from "next/head";
import { Button, Grid, TextField } from "@mui/material";
import styles from "../../../styles/login.module.css";
import LayoutLogin from "../../../layout/layout-login";
import { NextPageWithLayout } from "../../_app";

const schema = yup
  .object({
    password: yup.string().required("La contraseña es requerida"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Password: NextPageWithLayout<any> = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const { query } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios
        .post("https://digitalmoney.ctd.academy/api/login", {
          email: query.email,
          password: data.password,
        })
        .then(function (response) {
          console.log(response);
          setError(false);
          router.push("/");
        });
    } catch (error) {
      console.log(error);
      setError(true);
    }
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
          <h2>Ingresá tu contraseña</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="outlined-basic" variant="outlined" className={styles.inputForm} type="password" {...register("password")} />
            <p> {errors.password?.message}</p>
            {error && <p>Contraseña incorrecta. Vuelve a intentarlo</p>}
            <Button variant="secondary" type="submit">Continuar</Button>
          </form>
        </Grid>
      </main>
    </>
  );
};

Password.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};

export default Password;