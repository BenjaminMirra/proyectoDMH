import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";
import { Button, Grid, TextField } from "@mui/material";
import styles from "../../../styles/login.module.css"

const schema = yup
  .object({
    password: yup.string().required("La contraseña es requerida"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Password = () => {
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
      <meta name="iniciar-sesion" content="Digital Money House" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Header />
      <Grid className={styles.gridGeneralContainer}>
      <h2>Ingresá tu contraseña</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField id="outlined-basic"  variant="outlined" className={styles.inputForm} type="password" {...register("password")} />
        <p> {errors.password?.message}</p>
        {error && <p>Contraseña incorrecta. Vuelve a intentarlo</p>}
        <Button variant="secondary" type="submit">Continuar</Button>
      </form>
    </Grid>
      <Footer />
    </main>
  </>
  );
};

export default Password;