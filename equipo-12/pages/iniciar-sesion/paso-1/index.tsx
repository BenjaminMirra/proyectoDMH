import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import * as yup from "yup";
import { useRouter } from "next/router";
import Header from "../../../components/Header/header";
import Footer from "../../../components/Footer/footer";
import Head from "next/head";
import { Grid } from "@mui/material";
import styles from "../../../styles/login.module.css"

const schema = yup
  .object({
    email: yup
      .string()
      .required("Se requiere de un correo electronico")
      .email("Se solicita un correo electronico valido"),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const Username = () => {
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
      <h2>¡Hola! Ingresá tu e-mail</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} />
        <p> {errors.email?.message}</p>
        <input type="submit" value="Continuar" />
      </form>
      <Link href="#">Crear cuenta</Link>
    </Grid>
      <Footer />
    </main>
  </>    
  );
};

export default Username;
