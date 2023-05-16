import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Button, Grid, Input, TextField } from "@mui/material";
import styles from "../../../styles/login.module.css";
import ControlledInput from "../../../components/FormController/controlled-input";

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
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
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
        <meta name="iniciar-sesion" content="Digital Money House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <Grid className={styles.gridGeneralContainer}>
          <h2>¡Hola! Ingresá tu e-mail</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "1fr 1fr 0.25fr 1fr 1fr",
          gridColumnGap: "62px",
          gridRowGap: "40px",
          "& button ": {
            borderRadius: "10px",
          },
          "& input": {
            backgroundColor: "#FFFF",
            borderRadius: "10px",
            height: "31px",
          },
          "& .css-1av9oub-MuiInputBase-root-MuiFilledInput-root::after, & .css-1av9oub-MuiInputBase-root-MuiFilledInput-root::before":
            {
              display: "none",
            },
          "& .css-1yuncik-MuiFormLabel-root-MuiInputLabel-root": {
            transform: "translate(12px, 20px) scale(1)",
          },
        }}
      >
              <ControlledInput
                name="email"
                control={control}
                type="text"
                label="Correo electronico*"
                errorMessage={errors["email"]?.message}
                variant="filled"
              />

              {/*  <TextField id="filled-basic"  variant="filled" className={styles.inputForm} {...register("email")} />
        <p className={styles.pError}> {errors.email?.message}</p> */}
              <Button variant="secondary" type="submit">
                Continuar
              </Button>
 
          <Button variant="tertiary" onClick={() => onClick()}>
            Crear cuenta
          </Button>
          </Box>
          </form>
        </Grid>
        <Footer />
      </main>
    </>
  );
};

Username.getLayout = function getLayout(page: ReactElement) {
  return <LayoutLogin>{page}</LayoutLogin>;
};

export default Username;